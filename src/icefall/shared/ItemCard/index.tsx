import type { CustItem } from "../../data";
import { FUEL, WARMTH_BONUS } from "../../data";
import { fS } from "../../helpers";

interface Props {
  item: CustItem;
  beep: boolean;
  inStock: boolean;
  onTap: () => void;
  onSkip: () => void;
}

export function ItemCard({ item, beep, inStock, onTap, onSkip }: Props) {
  const hp = item.hits / item.need;
  return (
    <div className="flex flex-col items-center px-4 pt-3 pb-1">
      <div
        className={`${inStock ? "tap" : ""} relative rounded-lg px-5 pt-3 pb-2 text-center`}
        onClick={inStock ? onTap : undefined}
        style={{
          background: inStock ? "rgba(30,22,14,.75)" : "rgba(30,22,14,.35)",
          border: beep
            ? "1.5px solid #4a90c0"
            : inStock
              ? "1.5px solid rgba(60,44,28,.4)"
              : "1.5px solid rgba(60,44,28,.2)",
          opacity: inStock ? 1 : 0.5,
          animation: beep ? "sb .4s ease" : undefined,
          boxShadow: inStock ? "0 2px 6px rgba(0,0,0,.3)" : undefined,
          minWidth: 120,
        }}
      >
        <div className="text-3xl">{item.i}</div>
        <div className="mt-1 truncate text-xs font-bold text-[#c0b090]">{item.n}</div>
        <div className="text-sm font-bold" style={{ color: "#d4a830" }}>
          {fS(item.rp)}
        </div>
        {FUEL.has(item.id) && (
          <div className="text-[9px] text-[#c07030]">🔥+{WARMTH_BONUS[item.id]}°</div>
        )}
        {inStock && (
          <div className="mt-1 h-1 rounded-sm bg-[rgba(10,8,4,.5)]">
            <div
              className="h-full rounded-sm transition-[width] duration-100"
              style={{
                width: `${hp * 100}%`,
                background: hp > 0 ? "linear-gradient(90deg,#c07030,#4a90c0)" : "transparent",
                animation: hp > 0 && hp < 1 ? "bg .8s infinite" : undefined,
              }}
            />
          </div>
        )}
      </div>
      {!inStock && (
        <div
          className="tap mt-2 rounded-lg px-3 py-1.5 text-xs font-bold text-[#c06040]"
          onClick={onSkip}
          style={{
            background: "rgba(192,96,64,.1)",
            border: "1.5px solid rgba(192,96,64,.3)",
          }}
        >
          Нет в наличии
        </div>
      )}
    </div>
  );
}
