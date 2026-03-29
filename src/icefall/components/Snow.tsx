import { useRef } from "react";

interface Flake {
  id: number;
  x: number;
  d: number;
  dl: number;
  sz: number;
  o: number;
}

export function Snow() {
  const flakes = useRef<Flake[]>(
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      d: 8 + Math.random() * 10,
      dl: Math.random() * 8,
      sz: 1 + Math.random() * 2,
      o: 0.1 + Math.random() * 0.25,
    })),
  ).current;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {flakes.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-[#a0c0e0]"
          style={{
            left: `${s.x}%`,
            top: -10,
            width: s.sz,
            height: s.sz,
            opacity: s.o,
            animation: `sf ${s.d}s linear ${s.dl}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
