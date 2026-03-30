import type { ActiveCust, CustItem, Denomination } from "../../data";
import { DENOMS, FUEL, WARMTH_BONUS, TIER_COLORS, TIER_NAMES } from "../../data";
import { fS, fmt } from "../../helpers";
import { MarketLabel } from "../../shared/Character/MarketLabel";

interface Props {
  cust: ActiveCust;
  changeGiven: number;
  changeNeeded: number;
  changeStack: (Denomination & { id: number })[];
  patProg: number;
  shakeCash: boolean;
  beepItems: string[];
  fled: boolean;
  onTapItem: (item: CustItem) => void;
  onTapDenom: (d: Denomination) => void;
}

export function CustomerService({
  cust,
  changeGiven,
  changeNeeded,
  changeStack,
  patProg,
  shakeCash,
  beepItems,
  fled,
  onTapItem,
  onTapDenom,
}: Props) {
  return (
    <>
      {/* ═══ CUSTOMER ZONE — upper half, "across the counter" ═══ */}
      <div className="relative z-[2] flex flex-col items-center" style={{ flex: "0 0 50%" }}>
        <MarketLabel
          name={cust.name}
          tierColor={TIER_COLORS[cust.tier]}
          tierName={TIER_NAMES[cust.tier]}
          desc={cust.desc}
        />

        {/* Patience ring — top right corner */}
        <div className="absolute top-2 right-2">
          <div className="relative h-9 w-9">
            <svg width={36} height={36} viewBox="0 0 36 36">
              <circle cx={18} cy={18} r={14} fill="rgba(0,0,0,.4)" stroke="rgba(20,16,10,.6)" strokeWidth={3} />
              <circle
                cx={18} cy={18} r={14} fill="none"
                stroke={patProg > 0.3 ? "#4a90c0" : "#c05030"}
                strokeWidth={3}
                strokeDasharray={`${patProg * 88} 88`}
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
                style={{ transition: "stroke-dasharray .5s, stroke .5s" }}
              />
            </svg>
            <div
              className="absolute inset-0 flex items-center justify-center text-[10px] font-bold"
              style={{ color: patProg > 0.3 ? "#4a90c0" : "#c05030" }}
            >
              {cust.patLeft}
            </div>
          </div>
        </div>
      </div>

      {/* Empty — customer wants something we don't have */}
      {cust.phase === "empty" && (
        <div className="mt-2 text-center">
          <div className="text-xs text-[#8a7a6a]">Нечего покупать...</div>
          {cust.wanted.length > 0 && (
            <div className="mt-1 text-[11px] text-[#c09040]">
              Хотел: {cust.wanted.map((w) => w.i + " " + w.n).join(", ")}
            </div>
          )}
        </div>
      )}

      {/* Exact payment */}
      {cust.phase === "exact" && (
        <div className="mt-2 text-center" style={{ animation: "ps .4s ease" }}>
          <div className="text-[28px]">💰</div>
          <div className="text-xs font-bold text-[#4a90c0]">Без сдачи!</div>
          <div className="text-lg font-bold text-[#d4a830]">{fmt(cust.total)}</div>
        </div>
      )}

      {/* ═══ COUNTER SURFACE — lower half, items & change ═══ */}
      <div className="relative z-[2] flex flex-1 flex-col justify-end overflow-hidden">
        {/* Scan phase — items laid on counter */}
        {cust.phase === "scan" && (
          <div className="overflow-auto px-2 pt-3 pb-1">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-1.5">
              {cust.items.map((item) => {
                const done = cust.scanned.includes(item.uid);
                const hp = done ? 1 : item.hits / item.need;
                const isB = beepItems.includes(item.uid);
                return (
                  <div
                    key={item.uid}
                    className={`tap relative rounded-lg px-1 pt-1.5 pb-1 text-center ${done ? "done" : ""}`}
                    onClick={() => onTapItem(item)}
                    style={{
                      background: done
                        ? "rgba(70,140,200,.05)"
                        : "rgba(30,22,14,.75)",
                      border: done
                        ? "1.5px solid #1a3050"
                        : isB
                          ? "1.5px solid #4a90c0"
                          : "1.5px solid rgba(60,44,28,.4)",
                      opacity: done ? 0.3 : 1,
                      animation: isB ? "sb .4s ease" : undefined,
                      boxShadow: !done ? "0 2px 6px rgba(0,0,0,.3)" : undefined,
                    }}
                  >
                    <div className="text-xl">{item.i}</div>
                    <div className="mt-px truncate text-[8px] font-bold text-[#c0b090]">{item.n}</div>
                    <div className="text-[10px] font-bold" style={{ color: done ? "#1a3050" : "#d4a830" }}>
                      {fS(item.rp)}
                    </div>
                    {FUEL.has(item.id) && !done && (
                      <div className="text-[7px] text-[#c07030]">🔥+{WARMTH_BONUS[item.id]}°</div>
                    )}
                    {!done && (
                      <div className="mt-0.5 h-0.5 rounded-sm bg-[rgba(10,8,4,.5)]">
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
                    {done && (
                      <div className="absolute top-px right-1 text-[10px] text-[#4a90c0]">✓</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Change phase */}
        {cust.phase === "change" && (
          <div className="flex flex-col gap-1.5 overflow-auto px-2 pt-3 pb-1">
            <div
              className="rounded-xl border border-[rgba(60,44,28,.3)] bg-[rgba(20,14,8,.8)] p-2 text-center"
              style={{ animation: shakeCash ? "sk .3s ease" : undefined }}
            >
              <div className="mb-1.5 rounded-lg border border-[rgba(40,30,16,.5)] bg-[rgba(10,8,4,.7)] px-1.5 py-2">
                <div className="flex justify-between text-[9px] text-[#4a3a2a]">
                  <span>ИТОГО {fS(cust.total)}</span>
                  <span>ОПЛАТА {fS(cust.payWith)}</span>
                </div>
                <div
                  className="text-[28px] font-bold leading-tight transition-colors duration-200"
                  style={{
                    color: changeGiven >= changeNeeded - 0.5 ? "#50e080" : changeGiven > 0 ? "#d0b050" : "#2a1e14",
                    textShadow: changeGiven >= changeNeeded - 0.5 ? "0 0 16px rgba(80,224,128,.3)" : "none",
                  }}
                >
                  {fS(changeGiven)}
                  <span className="text-[12px] opacity-50">/{fS(changeNeeded)}</span>
                </div>
              </div>
              <div className="flex min-h-7 flex-wrap justify-center gap-0.5">
                {changeStack.map((s, i) => (
                  <div key={s.id || i} style={{ animation: `cd .25s ease backwards ${i * 0.04}s` }}>
                    <div
                      className="flex items-center justify-center rounded text-[9px] font-bold"
                      style={{
                        width: s.w,
                        height: s.h,
                        background: `linear-gradient(135deg,${s.bg},${s.c}18)`,
                        border: `1.5px solid ${s.c}44`,
                        color: s.c,
                      }}
                    >
                      {s.l} р.
                    </div>
                  </div>
                ))}
                {!changeStack.length && (
                  <div className="py-1 text-[9px] text-[#3a2a1a]" style={{ animation: "pl 2s infinite" }}>
                    Соберите сдачу ↓
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-1">
              {DENOMS.map((d) => (
                <div
                  key={d.v}
                  className="tap flex items-center justify-center rounded-md text-xs font-bold shadow-md"
                  onClick={() => onTapDenom(d)}
                  style={{
                    width: d.w,
                    height: d.h,
                    background: `linear-gradient(135deg,${d.bg},${d.c}12)`,
                    border: `1.5px solid ${d.c}44`,
                    color: d.c,
                  }}
                >
                  {d.l} р.
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fled overlay */}
      {fled && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[rgba(4,8,16,.8)]">
          <div className="text-center" style={{ animation: "ps .3s ease" }}>
            <div className="text-[40px]">😤</div>
            <div className="mt-1.5 text-sm font-bold text-[#c06040]">Не дождался!</div>
          </div>
        </div>
      )}
    </>
  );
}
