import type { Mesh as BMesh } from '@babylonjs/core/Meshes/mesh';
import { VertexData } from '@babylonjs/core/Meshes/mesh.vertexData';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';

import type { Vector3 } from './vector3';

export class EngineBufferAttribute {
  array: Float32Array;
  itemSize: number;
  needsUpdate = false;
  count: number;

  constructor(array: Float32Array, itemSize: number) {
    this.array = array;
    this.itemSize = itemSize;
    this.count = array.length / itemSize;
  }
}

// Re-export as BufferAttribute for consumers
export { EngineBufferAttribute as BufferAttribute };

export class EngineBufferGeometry {
  attributes: Record<string, EngineBufferAttribute> = {};
  _dirty = true;
  _disposed = false;
  _pendingRotateZ = 0;

  setAttribute(name: string, attr: EngineBufferAttribute): this {
    this.attributes[name] = attr;
    this._dirty = true;
    return this;
  }

  getAttribute(name: string): EngineBufferAttribute | undefined {
    return this.attributes[name];
  }

  setFromPoints(points: Vector3[]): this {
    const positions = new Float32Array(points.length * 3);
    for (let i = 0; i < points.length; i++) {
      positions[i * 3] = points[i].x;
      positions[i * 3 + 1] = points[i].y;
      positions[i * 3 + 2] = points[i].z;
    }
    this.setAttribute('position', new EngineBufferAttribute(positions, 3));
    return this;
  }

  _applyToMesh(bMesh: BMesh): void {
    if (this._disposed) return;

    const posAttr = this.attributes['position'];
    if (!posAttr) return;

    const vertexData = new VertexData();
    vertexData.positions = Array.from(posAttr.array);

    const colorAttr = this.attributes['color'];
    if (colorAttr) {
      // Convert RGB to RGBA for Babylon.js
      const rgb = colorAttr.array;
      const rgba = new Float32Array((rgb.length / 3) * 4);
      for (let i = 0; i < rgb.length / 3; i++) {
        rgba[i * 4] = rgb[i * 3];
        rgba[i * 4 + 1] = rgb[i * 3 + 1];
        rgba[i * 4 + 2] = rgb[i * 3 + 2];
        rgba[i * 4 + 3] = 1;
      }
      vertexData.colors = Array.from(rgba);
    }

    // Generate simple indices if not present
    const vertexCount = posAttr.count;
    const indices = new Array(vertexCount);
    for (let i = 0; i < vertexCount; i++) indices[i] = i;
    vertexData.indices = indices;

    if (this._pendingRotateZ) _rotateVertexDataZ(vertexData, this._pendingRotateZ);
    vertexData.applyToMesh(bMesh, true);
    this._dirty = false;
  }

  rotateZ(angle: number): this {
    this._pendingRotateZ += angle;
    return this;
  }

  dispose(): void {
    this._disposed = true;
    this.attributes = {};
  }
}

function _rotateVertexDataZ(vd: VertexData, angle: number): void {
  const positions = vd.positions as number[] | null;
  if (!positions) return;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  for (let i = 0; i < positions.length; i += 3) {
    const x = positions[i];
    const y = positions[i + 1];
    positions[i] = x * cos - y * sin;
    positions[i + 1] = x * sin + y * cos;
  }
}

// Re-export as BufferGeometry
export { EngineBufferGeometry as BufferGeometry };

/**
 * Specific geometry types — these pre-populate attributes from Babylon.js MeshBuilder.
 * They store the creation params and create geometry lazily.
 */

export class SphereGeometry extends EngineBufferGeometry {
  constructor(
    public _radius: number,
    public _widthSegments = 16,
    public _heightSegments = 16,
  ) {
    super();
  }

  _applyToMesh(bMesh: BMesh): void {
    if (this._disposed) return;
    const scene = bMesh.getScene();
    // Use MeshBuilder to create the geometry, then steal its vertexData
    const tmp = MeshBuilder.CreateSphere(
      '_tmp',
      {
        diameter: this._radius * 2,
        segments: this._widthSegments,
      },
      scene,
    );
    const vd = VertexData.ExtractFromMesh(tmp);
    vd.applyToMesh(bMesh, true);
    tmp.dispose();
    this._dirty = false;
  }
}

export class CylinderGeometry extends EngineBufferGeometry {
  constructor(
    public _radiusTop: number,
    public _radiusBottom: number,
    public _height: number,
    public _segments = 8,
  ) {
    super();
  }

  _applyToMesh(bMesh: BMesh): void {
    if (this._disposed) return;
    const scene = bMesh.getScene();
    const tmp = MeshBuilder.CreateCylinder(
      '_tmp',
      {
        diameterTop: this._radiusTop * 2,
        diameterBottom: this._radiusBottom * 2,
        height: this._height,
        tessellation: this._segments,
      },
      scene,
    );
    const vd = VertexData.ExtractFromMesh(tmp);
    if (this._pendingRotateZ) _rotateVertexDataZ(vd, this._pendingRotateZ);
    vd.applyToMesh(bMesh, true);
    tmp.dispose();
    this._dirty = false;
  }
}

export class PlaneGeometry extends EngineBufferGeometry {
  constructor(
    public _width: number,
    public _height: number,
  ) {
    super();
  }

  _applyToMesh(bMesh: BMesh): void {
    if (this._disposed) return;
    const scene = bMesh.getScene();
    const tmp = MeshBuilder.CreatePlane(
      '_tmp',
      {
        width: this._width,
        height: this._height,
      },
      scene,
    );
    const vd = VertexData.ExtractFromMesh(tmp);
    vd.applyToMesh(bMesh, true);
    tmp.dispose();
    this._dirty = false;
  }
}

export class RingGeometry extends EngineBufferGeometry {
  constructor(
    public _innerRadius: number,
    public _outerRadius: number,
    public _segments = 32,
  ) {
    super();
  }

  _applyToMesh(bMesh: BMesh): void {
    if (this._disposed) return;
    const scene = bMesh.getScene();
    // Babylon.js doesn't have a ring mesh directly, use Disc as approximation
    const tmp = MeshBuilder.CreateDisc(
      '_tmp',
      {
        radius: this._outerRadius,
        tessellation: this._segments,
      },
      scene,
    );
    const vd = VertexData.ExtractFromMesh(tmp);
    vd.applyToMesh(bMesh, true);
    tmp.dispose();
    this._dirty = false;
  }
}

export class OctahedronGeometry extends EngineBufferGeometry {
  constructor(
    public _radius: number,
    public _detail = 0,
  ) {
    super();
  }

  _applyToMesh(bMesh: BMesh): void {
    if (this._disposed) return;
    const scene = bMesh.getScene();
    const tmp = MeshBuilder.CreatePolyhedron(
      '_tmp',
      {
        type: 1, // Octahedron
        size: this._radius,
      },
      scene,
    );
    const vd = VertexData.ExtractFromMesh(tmp);
    vd.applyToMesh(bMesh, true);
    tmp.dispose();
    this._dirty = false;
  }
}

export class IcosahedronGeometry extends EngineBufferGeometry {
  constructor(
    public _radius: number,
    public _detail = 0,
  ) {
    super();
  }

  _applyToMesh(bMesh: BMesh): void {
    if (this._disposed) return;
    const scene = bMesh.getScene();
    const tmp = MeshBuilder.CreatePolyhedron(
      '_tmp',
      {
        type: 3, // Icosahedron
        size: this._radius,
      },
      scene,
    );
    const vd = VertexData.ExtractFromMesh(tmp);
    vd.applyToMesh(bMesh, true);
    tmp.dispose();
    this._dirty = false;
  }
}
