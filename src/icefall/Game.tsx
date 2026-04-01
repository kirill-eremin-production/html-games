import { BottomNav } from "./components/BottomNav";
import { InfoModal } from "./components/InfoModal";
import { IntroScreen } from "./components/IntroScreen";
import { ProductModal } from "./components/ProductModal";
import { RegisterPage } from "./pages/register";
import { ResultPopup } from "./components/ResultPopup";
import { SettlementPage, UpgradesPage, WarehousePage } from "./components/SidePanel";
import { Snow } from "./components/Snow";
import { StatusBar } from "./components/StatusBar";
import { VictoryScreen } from "./components/VictoryScreen";
import { Fullscreen } from "./shared/Fullscreen";
import { MerchantModal } from "./shared/MerchantModal";
import { Soundtrack } from "./shared/Soundtrack";
import { useAppDispatch, useAppSelector } from "./store";
import {
  selectAllProds,
  selectChangeNeeded,
  selectDaysUntilMerchant,
  selectIsMerchantDay,
  selectMaxCustPerDay,
  selectNextDayIsMerchant,
  selectNextProj,
  selectPatProg,
  selectTotalStock,
  selectWC,
  selectWarmRate,
  selectWsMult,
  getUpgCost,
} from "./store/selectors";
import { coreActions } from "./store/slices/coreSlice";
import { merchantActions } from "./store/slices/merchantSlice";
import { tapItem, skipItem, tapDenom } from "./store/thunks/saleThunks";
import { buyStock, setPriceAction, buyUpg, buildProj } from "./store/thunks/shopThunks";
import { nextDay } from "./store/thunks/dayThunks";
import {
  useWarmthDecay,
  usePatienceTimer,
  useRandomEvents,
  useCustomerSpawn,
  useAutoScan,
  useAutoChange,
  useFullAuto,
} from "./store/effects";

const SHOP_BG =
  "https://storage.yandexcloud.net/k-ai-public/icefall-market/backgrounds/market-0.webp";
const SHOP_FG =
  "https://storage.yandexcloud.net/k-ai-public/icefall-market/backgrounds/market-1.webp";

const TRACKS = [
  "https://storage.yandexcloud.net/k-ai-public/icefall-market/music/frozen-mechanism.mp3",
  "https://storage.yandexcloud.net/k-ai-public/icefall-market/music/frozen-empire.mp3",
];

export default function Game() {
  const dispatch = useAppDispatch();

  // ── State ──
  const phase = useAppSelector((s) => s.core.phase);
  const money = useAppSelector((s) => s.core.money);
  const earned = useAppSelector((s) => s.core.earned);
  const day = useAppSelector((s) => s.core.day);
  const dayPhase = useAppSelector((s) => s.core.dayPhase);
  const tab = useAppSelector((s) => s.core.tab);
  const introStep = useAppSelector((s) => s.core.introStep);
  const infoModal = useAppSelector((s) => s.core.infoModal);
  const prodModal = useAppSelector((s) => s.core.prodModal);

  const cust = useAppSelector((s) => s.customer.cust);
  const custIdx = useAppSelector((s) => s.customer.custIdx);
  const served = useAppSelector((s) => s.customer.served);
  const dayServed = useAppSelector((s) => s.customer.dayServed);
  const dayEarned = useAppSelector((s) => s.customer.dayEarned);
  const dayMissed = useAppSelector((s) => s.customer.dayMissed);
  const changeGiven = useAppSelector((s) => s.customer.changeGiven);
  const changeStack = useAppSelector((s) => s.customer.changeStack);
  const result = useAppSelector((s) => s.customer.result);
  const shakeCash = useAppSelector((s) => s.customer.shakeCash);
  const beepItems = useAppSelector((s) => s.customer.beepItems);
  const fled = useAppSelector((s) => s.customer.fled);

  const inv = useAppSelector((s) => s.inventory.inv);
  const upg = useAppSelector((s) => s.upgrade.upg);

  const warmth = useAppSelector((s) => s.world.warmth);
  const population = useAppSelector((s) => s.world.population);
  const popCap = useAppSelector((s) => s.world.popCap);
  const built = useAppSelector((s) => s.world.built);
  const hasInfirmary = useAppSelector((s) => s.world.hasInfirmary);
  const storyMsg = useAppSelector((s) => s.world.storyMsg);
  const storyLog = useAppSelector((s) => s.world.storyLog);

  const merchantStock = useAppSelector((s) => s.merchant.merchantStock);
  const showMerchantModal = useAppSelector((s) => s.merchant.showMerchantModal);
  const activeEvent = useAppSelector((s) => s.event.activeEvent);

  // ── Derived ──
  const maxCustPerDay = useAppSelector(selectMaxCustPerDay);
  const wC = useAppSelector(selectWC);
  const warmRate = useAppSelector(selectWarmRate);
  const wsMult = useAppSelector(selectWsMult);
  const allProds = useAppSelector(selectAllProds);
  const totalStock = useAppSelector(selectTotalStock);
  const nextProj = useAppSelector(selectNextProj);
  const changeNeeded = useAppSelector(selectChangeNeeded);
  const patProg = useAppSelector(selectPatProg);
  const isMerchantDay = useAppSelector(selectIsMerchantDay);
  const daysUntilMerchant = useAppSelector(selectDaysUntilMerchant);
  const nextDayIsMerchant = useAppSelector(selectNextDayIsMerchant);

  // ── Effects ──
  useWarmthDecay();
  usePatienceTimer();
  useRandomEvents();
  useCustomerSpawn();
  useAutoScan();
  useAutoChange();
  useFullAuto();

  return (
    <div className="relative flex h-dvh flex-col overflow-hidden bg-gradient-to-br from-[#080c14] via-[#0a1020] to-[#0c0e18] font-serif text-[#c0c8d8]">
      <Snow />
      <Soundtrack tracks={TRACKS} />
      <Fullscreen />

      {phase === "intro" && (
        <IntroScreen
          step={introStep}
          onNext={() => dispatch(coreActions.incrementIntroStep())}
          onStart={() => dispatch(coreActions.setPhase("game"))}
        />
      )}

      {phase === "victory" && (
        <VictoryScreen population={population} day={day} served={served} earned={earned} />
      )}

      {phase === "game" && (
        <>
          <StatusBar
            day={day}
            custIdx={custIdx}
            maxCustPerDay={maxCustPerDay}
            warmth={warmth}
            wC={wC}
            population={population}
            popCap={popCap}
            money={money}
            activeEvent={activeEvent}
            storyMsg={storyMsg}
            onInfoModal={(m) => dispatch(coreActions.setInfoModal(m))}
          />

          {/* Page content — centering container */}
          <div className="game-area flex min-h-0 flex-1 items-center justify-center overflow-hidden">
            {/* 9:16 game panel */}
            <div className="game-panel relative flex flex-col overflow-hidden">
              {tab === "register" && (
                <RegisterPage
                  dayPhase={dayPhase}
                  day={day}
                  dayServed={dayServed}
                  dayMissed={dayMissed}
                  dayEarned={dayEarned}
                  warmth={warmth}
                  cust={cust}
                  inv={inv}
                  custIdx={custIdx}
                  maxCustPerDay={maxCustPerDay}
                  totalStock={totalStock}
                  changeGiven={changeGiven}
                  changeNeeded={changeNeeded}
                  changeStack={changeStack}
                  patProg={patProg}
                  shakeCash={shakeCash}
                  beepItems={beepItems}
                  fled={fled}
                  merchantVisiting={merchantStock !== null}
                  nextDayIsMerchant={nextDayIsMerchant}
                  shopBg={SHOP_BG}
                  shopFg={SHOP_FG}
                  onNextDay={() => dispatch(nextDay())}
                  onSetDayPhase={(p) => dispatch(coreActions.setDayPhase(p))}
                  onTapItem={(item) => dispatch(tapItem(item))}
                  onSkipItem={(item) => dispatch(skipItem(item))}
                  onTapDenom={(d) => dispatch(tapDenom(d))}
                  onOpenMerchant={() => dispatch(merchantActions.openMerchantModal())}
                />
              )}

              {tab === "warehouse" && (
                <WarehousePage
                  prods={allProds}
                  inv={inv}
                  daysUntilMerchant={daysUntilMerchant}
                  onProdModal={(p) => dispatch(coreActions.setProdModal(p))}
                />
              )}

              {tab === "settlement" && (
                <SettlementPage
                  nextProj={nextProj}
                  money={money}
                  built={built}
                  storyLog={storyLog}
                  onBuildProj={(p) => dispatch(buildProj(p))}
                />
              )}

              {tab === "upgrades" && (
                <UpgradesPage
                  money={money}
                  upg={upg}
                  upgCost={(u) => getUpgCost(upg, u)}
                  onBuyUpg={(u) => dispatch(buyUpg(u))}
                />
              )}
            </div>
          </div>

          <BottomNav
            active={tab}
            isMerchantDay={isMerchantDay}
            onChange={(t) => dispatch(coreActions.setTab(t))}
          />

          {showMerchantModal && merchantStock && (
            <MerchantModal
              stock={merchantStock}
              inv={inv}
              money={money}
              wsMult={wsMult}
              onBuyStock={(prod, qty) => dispatch(buyStock(prod, qty))}
              onDismiss={() => dispatch(merchantActions.dismissMerchant())}
            />
          )}

          {prodModal && (
            <ProductModal
              product={prodModal}
              inv={inv}
              wsMult={wsMult}
              daysUntilMerchant={daysUntilMerchant}
              onClose={() => dispatch(coreActions.setProdModal(null))}
              onSetPrice={(pid, delta) => dispatch(setPriceAction(pid, delta))}
            />
          )}

          {infoModal && (
            <InfoModal
              type={infoModal}
              warmth={warmth}
              warmRate={warmRate}
              wC={wC}
              population={population}
              popCap={popCap}
              hasInfirmary={hasInfirmary}
              onClose={() => dispatch(coreActions.setInfoModal(null))}
            />
          )}

          {result && <ResultPopup result={result} />}
        </>
      )}
    </div>
  );
}
