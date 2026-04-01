import { Lock } from "lucide-react";
import type { Inventory, Product, Project, Upgrade, UpgLevels } from "../data";
import { FUEL, MERCHANT, PROJECTS, TIER_COLORS, UPGRADES } from "../data";
import { fS, fmt, priceColor } from "../helpers";

/* ── Warehouse ── */

export function WarehousePage({
  prods,
  inv,
  daysUntilMerchant,
  onProdModal,
}: {
  prods: Product[];
  inv: Inventory;
  daysUntilMerchant: number;
  onProdModal: (p: Product) => void;
}) {
  return (
    <div className="flex-1 overflow-auto p-1.5">
      {daysUntilMerchant > 0 && (
        <div className="mb-1.5 rounded-lg border border-[#1a2a3a] bg-[rgba(10,16,32,.5)] px-2.5 py-1.5 text-center">
          <div className="text-[10px] text-[#3a5a7a]">
            {MERCHANT.em} Обозник вернётся через {daysUntilMerchant}{" "}
            {daysUntilMerchant === 1 ? "день" : "дня"}
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-1">
        {prods.map((p) => {
          const s = inv[p.id] || { stock: 0, price: p.fair };
          const ratio = s.price / p.fair;
          const pC = priceColor(ratio);
          return (
            <div
              key={p.id}
              className="tap relative rounded-lg border-[1.5px] border-[#10182a] bg-[rgba(10,16,32,.6)] px-0.5 pt-1.5 pb-1 text-center"
              onClick={() => onProdModal(p)}
            >
              <div className="text-xl">{p.i}</div>
              <div className="mt-px truncate text-[8px] font-bold">{p.n}</div>
              <div className="text-[9px] font-bold" style={{ color: pC }}>{fS(s.price)} р.</div>
              <div className="text-[9px]" style={{ color: s.stock > 0 ? "#5a7a9a" : "#10182a" }}>
                📦{s.stock}
              </div>
              {FUEL.has(p.id) && <div className="absolute top-px left-1 text-[7px]">🔥</div>}
              <div className="absolute top-px right-1 text-[7px]" style={{ color: TIER_COLORS[p.tier] }}>
                {p.tier}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Settlement ── */

export function SettlementPage({
  nextProj,
  money,
  built,
  storyLog,
  onBuildProj,
}: {
  nextProj: Project | undefined;
  money: number;
  built: string[];
  storyLog: { text: string; proj: string }[];
  onBuildProj: (p: Project) => void;
}) {
  return (
    <div className="flex-1 overflow-auto p-1.5">
      <div className="flex flex-col gap-1.5">
        {nextProj && (
          <div className="rounded-[10px] border border-[#1a3050] bg-[rgba(10,26,50,.5)] p-2.5">
            <div className="mb-1 text-[8px] tracking-widest text-[#3a5a7a]">СЛЕДУЮЩАЯ ЦЕЛЬ</div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{nextProj.i}</span>
              <div className="flex-1">
                <div className="text-[13px] font-bold text-[#70b0d8]">{nextProj.n}</div>
                <div className="text-[10px] italic text-[#3a5a7a]">{nextProj.d}</div>
              </div>
              <button
                className="tap rounded-lg border border-transparent px-3.5 py-2 text-xs font-bold disabled:opacity-25"
                disabled={money < nextProj.cost}
                onClick={() => onBuildProj(nextProj)}
                style={{
                  background: money >= nextProj.cost ? "rgba(70,144,192,.1)" : "transparent",
                  color: money >= nextProj.cost ? "#70b0d8" : "#1a2a3a",
                  borderColor: money >= nextProj.cost ? "#4a90c033" : "transparent",
                }}
              >
                {fmt(nextProj.cost)}
              </button>
            </div>
          </div>
        )}
        {built.length > 0 && <div className="text-[8px] tracking-widest text-[#2a4050]">ПОСТРОЕНО</div>}
        {built.map((pid) => {
          const p = PROJECTS.find((pr) => pr.id === pid);
          return p ? (
            <div key={pid} className="flex items-center gap-1.5 rounded-md bg-[rgba(70,144,192,.03)] px-2 py-1">
              <span className="text-sm">{p.i}</span>
              <span className="text-[10px] text-[#3a6a8a]">{p.n}</span>
            </div>
          ) : null;
        })}
        {storyLog.length > 0 && (
          <div className="mt-1.5 text-[8px] tracking-widest text-[#2a4050]">📜 ЛЕТОПИСЬ</div>
        )}
        {storyLog.map((e, i) => (
          <div
            key={i}
            className="rounded-md bg-[rgba(10,16,32,.5)] px-2 py-1.5"
            style={{ borderLeft: `2px solid ${i === 0 ? "#4a90c0" : "#10182a"}` }}
          >
            <div className="text-[9px] text-[#2a4a6a]">{e.proj}</div>
            <div
              className="whitespace-pre-line text-[10px] italic"
              style={{ color: i === 0 ? "#5a8aaa" : "#2a3a4a" }}
            >
              {e.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Upgrades ── */

export function UpgradesPage({
  money,
  upg,
  upgCost,
  onBuyUpg,
}: {
  money: number;
  upg: UpgLevels;
  upgCost: (u: Upgrade) => number;
  onBuyUpg: (u: Upgrade) => void;
}) {
  return (
    <div className="flex-1 overflow-auto p-1.5">
      <div className="flex flex-col gap-1">
        {UPGRADES.map((u) => {
          const c = upgCost(u);
          const can = money >= c && upg[u.id] < u.max;
          const maxed = upg[u.id] >= u.max;
          const locked = u.id === "tent3" && upg.tent2 < 1;
          return (
            <button
              key={u.id}
              className="tap flex items-center gap-2 rounded-lg border border-transparent p-2 text-left font-[inherit] text-[#c0c8d8] disabled:cursor-default disabled:opacity-25"
              disabled={!can || locked}
              onClick={() => onBuyUpg(u)}
              style={{
                background: maxed
                  ? "rgba(70,144,192,.03)"
                  : can
                    ? "rgba(70,144,192,.05)"
                    : "rgba(8,12,20,.5)",
                borderColor: maxed ? "#1a2a3a22" : can ? "#4a90c018" : "transparent",
                opacity: locked ? 0.3 : undefined,
              }}
            >
              <span className="w-[26px] text-center text-xl">{u.i}</span>
              <div className="min-w-0 flex-1">
                <div className="flex justify-between text-[11px]">
                  <span className="font-bold">
                    {u.n}
                    {upg[u.id] > 0 && (
                      <span className="ml-1 text-[10px] font-normal text-[#4a90c0]">
                        {maxed ? "MAX" : `×${upg[u.id]}`}
                      </span>
                    )}
                  </span>
                  {!maxed && (
                    <span className="text-[10px] font-bold" style={{ color: can ? "#d4a830" : "#0a1520" }}>
                      {fmt(c)}
                    </span>
                  )}
                </div>
                <div className="text-[9px] italic text-[#2a4a5a]">{u.d}</div>
              </div>
              {locked && <Lock size={12} className="shrink-0 text-[#2a3a4a]" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
