import type { Inventory, Product } from "../../data";
import { PRODS, FUEL, MERCHANT } from "../../data";
import { fS, fmt } from "../../helpers";

interface Props {
  stock: string[];
  inv: Inventory;
  money: number;
  wsMult: number;
  onBuyStock: (prod: Product, qty: number) => void;
  onDismiss: () => void;
}

export function MerchantModal({ stock, inv, money, wsMult, onBuyStock, onDismiss }: Props) {
  const products = stock
    .map((id) => PRODS.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        {/* Header */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[28px]">{MERCHANT.em}</span>
            <div>
              <div className="text-[14px] font-bold text-[#80c080]">{MERCHANT.name}</div>
              <div className="text-[10px] text-[#5a8a5a]">
                Привёз {products.length} товаров
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-[#3a5a7a]">Кошелёк</div>
            <div className="text-[14px] font-bold text-[#d4a830]">{fS(money)} руб.</div>
          </div>
        </div>

        {/* Product grid */}
        <div className="mb-3 grid grid-cols-2 gap-1.5">
          {products.map((p) => {
            const s = inv[p.id] || { stock: 0, price: p.fair };
            const wsCost = Math.round(p.ws * wsMult);
            return (
              <div
                key={p.id}
                className="rounded-lg border border-[#1a3a2a] bg-[rgba(10,20,16,.6)] p-2"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-lg">{p.i}</span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[10px] font-bold">
                      {p.n}
                      {FUEL.has(p.id) && <span className="ml-0.5 text-[8px]">🔥</span>}
                    </div>
                    <div className="text-[9px] text-[#5a8a5a]">
                      {fmt(wsCost)} · 📦{s.stock}
                    </div>
                  </div>
                </div>
                <div className="mt-1.5 flex gap-1">
                  {[1, 5, 10].map((q) => {
                    const cost = wsCost * q;
                    const can = money >= cost;
                    return (
                      <button
                        key={q}
                        className="tap flex-1 rounded-md border border-transparent py-1 text-center font-[inherit] text-[10px] font-bold disabled:opacity-20"
                        disabled={!can}
                        onClick={() => onBuyStock(p, q)}
                        style={{
                          background: can ? "rgba(80,160,80,.1)" : "transparent",
                          color: can ? "#80c080" : "#0a1520",
                          borderColor: can ? "#4a8a4a22" : "transparent",
                        }}
                      >
                        +{q}
                        <br />
                        <span className="text-[8px] opacity-60">{fS(cost)}р</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dismiss button */}
        <button
          className="tap w-full rounded-xl border border-[#2a4a2a44] bg-gradient-to-br from-[#0a1a10] to-[#102018] py-3 text-[13px] font-bold text-[#80c080]"
          onClick={onDismiss}
        >
          {MERCHANT.em} Отпустить обозника
        </button>
      </div>
    </div>
  );
}
