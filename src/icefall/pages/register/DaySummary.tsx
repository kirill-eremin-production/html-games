import { fmt } from "../../helpers";

interface Props {
  day: number;
  dayServed: number;
  dayMissed: number;
  dayEarned: number;
  warmth: number;
  onNextDay: () => void;
}

export function DaySummary({ day, dayServed, dayMissed, dayEarned, warmth, onNextDay }: Props) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 p-4">
      <div className="rounded-2xl border border-[#2a1e14] bg-[rgba(10,8,4,.85)] px-8 py-6 text-center backdrop-blur-sm">
        <div className="text-base font-bold text-[#70b0d8]">📅 День {day} завершён</div>
        <div className="mt-2 text-[13px] text-[#5a7a9a]">
          Обслужено: {dayServed} · Ушли: {dayMissed}
        </div>
        <div className="mt-1 text-[15px] font-bold text-[#d4a830]">+{fmt(dayEarned)}</div>
        {warmth < 30 && (
          <div className="mt-2 text-center text-[11px] text-[#c06040]">
            ⚠️ Температура низкая! Продавайте топливо
          </div>
        )}
        <button
          className="tap mt-4 rounded-xl border border-[#2a4a6a44] bg-gradient-to-br from-[#0a1a30] to-[#102040] px-7 py-3 text-sm font-bold text-[#70b0d8]"
          onClick={onNextDay}
        >
          ☀️ Следующий день
        </button>
      </div>
    </div>
  );
}
