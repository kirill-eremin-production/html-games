import { Store, Package, Building2, Wrench } from "lucide-react";
import { MERCHANT } from "../data";

type Tab = "register" | "warehouse" | "settlement" | "upgrades";

const TABS: { id: Tab; icon: typeof Store; label: string }[] = [
  { id: "register", icon: Store, label: "Касса" },
  { id: "warehouse", icon: Package, label: "Склад" },
  { id: "settlement", icon: Building2, label: "Посёлок" },
  { id: "upgrades", icon: Wrench, label: "Апгрейды" },
];

interface Props {
  active: Tab;
  isMerchantDay: boolean;
  onChange: (t: Tab) => void;
}

export function BottomNav({ active, isMerchantDay, onChange }: Props) {
  return (
    <div className="flex shrink-0 border-t border-[#1a2a3a] bg-gradient-to-b from-[rgba(10,16,32,.95)] to-[rgba(6,10,18,.98)] pb-[env(safe-area-inset-bottom)]">
      {TABS.map((t) => {
        const Icon = t.icon;
        const isActive = active === t.id;
        return (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className={`tap relative flex flex-1 flex-col items-center gap-1 border-none bg-transparent pt-2 pb-1.5 font-[inherit] transition-all ${
              isActive ? "border-t-2 border-t-[#4a90c0] bg-[rgba(70,144,192,.08)]" : "border-t-2 border-t-transparent"
            }`}
          >
            <Icon
              size={20}
              strokeWidth={isActive ? 2.2 : 1.5}
              className={isActive ? "text-[#70b0d8]" : "text-[#2a3a4a]"}
            />
            <span
              className={`text-[9px] tracking-wide ${
                isActive ? "font-bold text-[#70b0d8]" : "font-normal text-[#2a3a4a]"
              }`}
            >
              {t.label}
            </span>
            {t.id === "warehouse" && isMerchantDay && (
              <span className="absolute -top-0.5 right-1/4 text-[8px]">{MERCHANT.em}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
