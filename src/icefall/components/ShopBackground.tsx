interface Props {
  src?: string;
}

export function ShopBackground({ src }: Props) {
  if (!src) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover"
        draggable={false}
      />
      {/* Darken overlay so UI remains readable */}
      <div className="absolute inset-0 bg-black/25" />
    </div>
  );
}
