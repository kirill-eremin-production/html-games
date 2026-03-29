import type { SaleResult } from "../data";
import { fmt } from "../helpers";

interface Props {
  result: SaleResult;
}

export function ResultPopup({ result }: Props) {
  return (
    <div className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center">
      <div
        className="rounded-2xl border-[1.5px] border-[#1a3a5a] bg-[rgba(4,8,16,.95)] px-7 py-4.5 text-center shadow-[0_8px_32px_rgba(0,0,0,.5)]"
        style={{ animation: "fu 1.3s ease forwards" }}
      >
        <div className="text-[34px]">{result.em}</div>
        <div className="mt-0.5 text-[10px] text-[#3a5a7a]">{result.name}</div>
        <div className="mt-1 text-xl font-bold text-[#d4a830]">+{fmt(result.earned)}</div>
        {result.tip > 0 && <div className="text-[10px] text-[#c07030]">Чаевые +{fmt(result.tip)}</div>}
      </div>
    </div>
  );
}
