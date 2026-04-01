import type { ActiveCust, CustItem, Denomination, Inventory } from "../../data";
import { MERCHANT } from "../../data";
import { MarketCharacter } from "../../shared/Character/Market";
import { SceneBackground } from "../../shared/SceneBackground";
import { CustomerService } from "./CustomerService";
import { DaySummary } from "./DaySummary";
import { EmptyShop } from "./EmptyShop";

interface Props {
  dayPhase: "shop" | "summary";
  day: number;
  dayServed: number;
  dayMissed: number;
  dayEarned: number;
  warmth: number;
  cust: ActiveCust | null;
  inv: Inventory;
  custIdx: number;
  maxCustPerDay: number;
  totalStock: number;
  changeGiven: number;
  changeNeeded: number;
  changeStack: (Denomination & { id: number })[];
  patProg: number;
  shakeCash: boolean;
  beepItems: string[];
  fled: boolean;
  merchantVisiting: boolean;
  nextDayIsMerchant: boolean;
  shopBg?: string;
  shopFg?: string;
  onNextDay: () => void;
  onOpenMerchant: () => void;
  onSetDayPhase: (p: "shop" | "summary") => void;
  onTapItem: (item: CustItem) => void;
  onSkipItem: (item: CustItem) => void;
  onTapDenom: (d: Denomination) => void;
}

export function RegisterPage({
  dayPhase,
  day,
  dayServed,
  dayMissed,
  dayEarned,
  warmth,
  cust,
  inv,
  custIdx,
  maxCustPerDay,
  totalStock,
  changeGiven,
  changeNeeded,
  changeStack,
  patProg,
  shakeCash,
  beepItems,
  fled,
  merchantVisiting,
  nextDayIsMerchant,
  shopBg,
  shopFg,
  onNextDay,
  onOpenMerchant,
  onSetDayPhase,
  onTapItem,
  onSkipItem,
  onTapDenom,
}: Props) {
  const content =
    dayPhase === "summary" ? (
      <DaySummary
        day={day}
        dayServed={dayServed}
        dayMissed={dayMissed}
        dayEarned={dayEarned}
        warmth={warmth}
        nextDayIsMerchant={nextDayIsMerchant}
        onNextDay={onNextDay}
      />
    ) : merchantVisiting ? (
      <div className="flex flex-1 flex-col items-center justify-end pb-8">
        <div className="rounded-xl border border-[#2a4a2a] bg-[rgba(10,20,16,.7)] px-6 py-4 text-center backdrop-blur-sm">
          <div className="text-[11px] font-bold text-[#80c080]">{MERCHANT.name}</div>
          <div className="mt-0.5 text-[10px] text-[#5a8a5a]">{MERCHANT.desc}</div>
          <button
            className="tap mt-3 rounded-xl border border-[#2a4a2a44] bg-gradient-to-br from-[#0a1a10] to-[#102018] px-7 py-2.5 text-[13px] font-bold text-[#80c080]"
            onClick={onOpenMerchant}
          >
            {MERCHANT.em} Торговать
          </button>
        </div>
      </div>
    ) : cust ? (
      <CustomerService
        cust={cust}
        inv={inv}
        changeGiven={changeGiven}
        changeNeeded={changeNeeded}
        changeStack={changeStack}
        patProg={patProg}
        shakeCash={shakeCash}
        beepItems={beepItems}
        fled={fled}
        onTapItem={onTapItem}
        onSkipItem={onSkipItem}
        onTapDenom={onTapDenom}
      />
    ) : (
      <EmptyShop
        totalStock={totalStock}
        custIdx={custIdx}
        maxCustPerDay={maxCustPerDay}
        onSetDayPhase={onSetDayPhase}
      />
    );

  const midground = merchantVisiting ? (
    <MarketCharacter portrait={MERCHANT.portrait} name={MERCHANT.name} />
  ) : cust ? (
    <MarketCharacter portrait={cust.portrait} name={cust.name} />
  ) : undefined;

  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <SceneBackground background={shopBg} foreground={shopFg} midground={midground}>
        {content}
      </SceneBackground>
    </div>
  );
}
