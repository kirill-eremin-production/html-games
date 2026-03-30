import type { ActiveCust, CustItem, Denomination } from "../../data";
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
  shopBg?: string;
  shopFg?: string;
  onNextDay: () => void;
  onSetDayPhase: (p: "shop" | "summary") => void;
  onTapItem: (item: CustItem) => void;
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
  shopBg,
  shopFg,
  onNextDay,
  onSetDayPhase,
  onTapItem,
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
        onNextDay={onNextDay}
      />
    ) : cust ? (
      <CustomerService
        cust={cust}
        changeGiven={changeGiven}
        changeNeeded={changeNeeded}
        changeStack={changeStack}
        patProg={patProg}
        shakeCash={shakeCash}
        beepItems={beepItems}
        fled={fled}
        onTapItem={onTapItem}
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

  const midground = cust ? (
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
