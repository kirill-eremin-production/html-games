import { Minus, Plus, X } from "lucide-react";
import type { Inventory, Product } from "../data";
import { FUEL, TIER_COLORS, TIER_NAMES } from "../data";
import { fS, fmt, priceLabel } from "../helpers";

interface Props {
  product: Product;
  inv: Inventory;
  money: number;
  wsMult: number;
  onClose: () => void;
  onSetPrice: (pid: string, delta: number) => void;
  onBuyStock: (prod: Product, qty: number) => void;
}

export function ProductModal({ product: p, inv, money, wsMult, onClose, onSetPrice, onBuyStock }: Props) {
  const s = inv[p.id] || { stock: 0, price: p.fair };
  const wsCost = Math.round(p.ws * wsMult);
  const margin = s.price > 0 ? Math.round(((s.price - wsCost) / wsCost) * 100) : 0;
  const ratio = s.price / p.fair;
  const pl = priceLabel(ratio);

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-body">
        {/* Header */}
        <div className="mb-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[30px]">{p.i}</span>
            <div>
              <div className="text-base font-bold">
                {p.n} {FUEL.has(p.id) && <span className="text-[11px]">🔥</span>}{" "}
                <span className="text-[10px]" style={{ color: TIER_COLORS[p.tier] }}>
                  {TIER_NAMES[p.tier]}
                </span>
              </div>
              <div className="text-[10px] text-[#3a5a7a]">
                Опт: {fmt(wsCost)} · Склад: {s.stock} шт.
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="tap flex h-8 w-8 items-center justify-center rounded-[10px] border border-[#1a2a3a] bg-[#0a1424] text-[#3a5a7a]"
          >
            <X size={16} />
          </button>
        </div>

        {/* Price */}
        <div className="mb-2 rounded-[10px] border border-[#10182a] bg-[rgba(10,16,32,.6)] p-2.5">
          <div className="mb-1 text-[9px] tracking-wider text-[#2a4a5a]">ЦЕНА</div>
          <div className="flex items-center justify-center gap-2">
            <button
              className="tap flex h-[30px] w-[34px] items-center justify-center rounded-md bg-[rgba(180,80,50,.12)] font-bold text-[#d08060]"
              onClick={() => onSetPrice(p.id, -1)}
            >
              <Minus size={16} />
            </button>
            <div className="min-w-[90px] text-center">
              <div className="text-2xl font-bold text-[#d4a830]">{fS(s.price)} руб.</div>
              <div className="mt-px text-[10px]" style={{ color: pl.color }}>
                {pl.text}
              </div>
              <div className="text-[9px] text-[#1a2a3a]">маржа {margin}%</div>
            </div>
            <button
              className="tap flex h-[30px] w-[34px] items-center justify-center rounded-md bg-[rgba(80,180,120,.12)] font-bold text-[#60c080]"
              onClick={() => onSetPrice(p.id, 1)}
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* Buy */}
        <div className="mb-1 text-[9px] tracking-wider text-[#2a4a5a]">ЗАКУПИТЬ</div>
        <div className="grid grid-cols-4 gap-1">
          {[1, 5, 10, 25].map((q) => {
            const cost = wsCost * q;
            const can = money >= cost;
            return (
              <button
                key={q}
                className="tap rounded-lg border border-transparent py-2 font-[inherit] text-xs font-bold disabled:cursor-default disabled:opacity-20"
                disabled={!can}
                onClick={() => onBuyStock(p, q)}
                style={{
                  background: can ? "rgba(70,144,192,.06)" : "transparent",
                  color: can ? "#70b0d8" : "#0a1520",
                  borderColor: can ? "#4a90c018" : "transparent",
                }}
              >
                +{q}
                <br />
                <span className="text-[9px] opacity-60">{fmt(cost)}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
