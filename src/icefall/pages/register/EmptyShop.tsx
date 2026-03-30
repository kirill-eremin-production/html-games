import { Calendar } from "lucide-react";

interface Props {
  totalStock: number;
  custIdx: number;
  maxCustPerDay: number;
  onSetDayPhase: (p: "shop" | "summary") => void;
}

export function EmptyShop({ totalStock, custIdx, maxCustPerDay, onSetDayPhase }: Props) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-1.5 p-3">
      <div className="text-[48px]" style={{ animation: "pl 2s infinite" }}>
        {totalStock > 0 ? "🏪" : "📦"}
      </div>
      <div className="text-center text-xs italic text-[#4a3a2a]">
        {custIdx >= maxCustPerDay
          ? "Все покупатели обслужены!"
          : totalStock > 0
            ? "Ожидание путника..."
            : "Склад пуст!"}
      </div>
      {custIdx >= maxCustPerDay && (
        <button
          className="tap rounded-xl border border-[#4a90c022] bg-[rgba(70,144,192,.08)] px-5 py-2.5 text-xs text-[#4a90c0]"
          onClick={() => onSetDayPhase("summary")}
        >
          <Calendar size={14} className="mr-1 inline" />
          Итоги дня
        </button>
      )}
    </div>
  );
}
