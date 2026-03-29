import { fmt } from "../helpers";

interface Props {
  population: number;
  day: number;
  served: number;
  earned: number;
}

export function VictoryScreen({ population, day, served, earned }: Props) {
  return (
    <div
      className="absolute inset-0 z-[200] flex items-center justify-center bg-gradient-to-b from-[#060a12] to-[#0a1020] p-6"
      style={{ animation: "fi 2s ease" }}
    >
      <div className="max-w-[400px] text-center">
        <div className="mb-3 text-[56px]">🔥</div>
        <div
          className="mb-3 text-xl font-bold text-[#70b0d8]"
          style={{ animation: "vg 3s infinite" }}
        >
          Большой Котёл запущен
        </div>
        <div className="mb-4 text-sm leading-[1.8] text-[#5a7a9a]">
          Вечная зима отступает. На станции — {population} душ. Они выжили.
        </div>
        <div className="text-[11px] text-[#2a3a4a]">
          Дней: {day} · Обслужено: {served} · Заработано: {fmt(earned)}
        </div>
      </div>
    </div>
  );
}
