export class Euler {
  constructor(
    public x = 0,
    public y = 0,
    public z = 0,
    public order = 'XYZ',
  ) {}

  set(x: number, y: number, z: number, order?: string): this {
    this.x = x;
    this.y = y;
    this.z = z;
    if (order) this.order = order;
    return this;
  }

  copy(e: Euler): this {
    this.x = e.x;
    this.y = e.y;
    this.z = e.z;
    this.order = e.order;
    return this;
  }

  clone(): Euler {
    return new Euler(this.x, this.y, this.z, this.order);
  }
}
