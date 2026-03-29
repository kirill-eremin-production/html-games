import { Calendar, Thermometer, Users } from "lucide-react";
import type { GameEvent } from "../data";
import { fS } from "../helpers";

interface Props {
  day: number;
  custIdx: number;
  maxCustPerDay: number;
  warmth: number;
  wC: string;
  population: number;
  popCap: number;
  money: number;
  activeEvent: GameEvent | null;
  storyMsg: string | null;
  onInfoModal: (m: "warmth" | "pop") => void;
}

export function StatusBar({
  day,
  custIdx,
  maxCustPerDay,
  warmth,
  wC,
  population,
  popCap,
  money,
  activeEvent,
  storyMsg,
  onInfoModal,
}: Props) {
  return (
    <>
      <div className="flex shrink-0 flex-wrap items-center gap-3 border-b border-[#1a2a3a] bg-gradient-to-b from-[rgba(8,12,20,.95)] to-[rgba(10,16,32,.85)] px-3 py-1.5 z-2">
        {/* Day */}
        <div className="flex items-center gap-1.5">
          <Calendar size={14} className="text-[#4a7a9a]" />
          <span className="text-[13px] font-bold text-[#70b0d8]">День {day}</span>
          <span className="text-[10px] text-[#3a5a7a]">{custIdx}/{maxCustPerDay}</span>
        </div>

        {/* Warmth */}
        <div className="tap flex items-center gap-1" onClick={() => onInfoModal("warmth")}>
          <Thermometer
            size={14}
            className="text-[#4a7a9a]"
            style={{ animation: warmth < 25 ? "wp 1s infinite" : undefined }}
          />
          <div className="h-[5px] w-[50px] overflow-hidden rounded-sm bg-[#0a1520]">
            <div
              className="h-full rounded-sm transition-[width] duration-500"
              style={{ width: `${warmth}%`, background: wC }}
            />
          </div>
          <span className="text-[10px] font-bold" style={{ color: wC }}>
            {Math.round(warmth)}°
          </span>
        </div>

        {/* Population */}
        <div className="tap flex items-center gap-1" onClick={() => onInfoModal("pop")}>
          <Users size={13} className="text-[#4a7a9a]" />
          <span className="text-[11px] text-[#5a8aaa]">{population}/{popCap}</span>
        </div>

        {/* Money */}
        <div className="ml-auto text-base font-bold text-[#d4a830]">{fS(money)} руб.</div>
      </div>

      {/* Event banner */}
      {activeEvent && (
        <div
          className={`shrink-0 z-2 border-b border-[#1a2a3a] px-2.5 py-1 text-center text-[10px] ${
            activeEvent.type === "b"
              ? "bg-gradient-to-r from-[#0a1a2a] to-[#081828] text-[#70c090]"
              : "bg-gradient-to-r from-[#1a0a0a] to-[#180808] text-[#d08080]"
          }`}
        >
          {activeEvent.text}
        </div>
      )}

      {/* Story message */}
      {storyMsg && (
        <div
          className="shrink-0 z-2 border-b border-[#1a3050] bg-gradient-to-r from-[rgba(10,26,50,.8)] to-[rgba(8,20,40,.8)] px-3 py-1.5 text-center text-[11px] italic text-[#70b0d8] whitespace-pre-line"
          style={{ animation: "sb2 5s ease forwards" }}
        >
          {storyMsg}
        </div>
      )}
    </>
  );
}
