import { BottomNav } from './components/BottomNav';
import { InfoModal } from './components/InfoModal';
import { IntroScreen } from './components/IntroScreen';
import { ProductModal } from './components/ProductModal';
import { RegisterPanel } from './components/RegisterPanel';
import { ResultPopup } from './components/ResultPopup';
import { SettlementPage, UpgradesPage, WarehousePage } from './components/SidePanel';
import { Snow } from './components/Snow';
import { StatusBar } from './components/StatusBar';
import { VictoryScreen } from './components/VictoryScreen';
import { Fullscreen } from './shared/Fullscreen';
import { Soundtrack } from './shared/Soundtrack';
import { useGameState } from './use-game-state';

const SHOP_BG =
  'https://storage.yandexcloud.net/k-ai-public/icefall-market/backgrounds/market-1.jpeg';

const TRACKS = [
  'https://storage.yandexcloud.net/k-ai-public/icefall-market/music/frozen-mechanism.mp3',
  'https://storage.yandexcloud.net/k-ai-public/icefall-market/music/frozen-empire.mp3',
];

export default function Game() {
  const g = useGameState();

  return (
    <div className="relative flex h-dvh flex-col overflow-hidden bg-gradient-to-br from-[#080c14] via-[#0a1020] to-[#0c0e18] font-serif text-[#c0c8d8]">
      <Snow />
      <Soundtrack tracks={TRACKS} />
      <Fullscreen />

      {g.phase === 'intro' && (
        <IntroScreen
          step={g.introStep}
          onNext={() => g.setIntroStep((s) => s + 1)}
          onStart={() => g.setPhase('game')}
        />
      )}

      {g.phase === 'victory' && (
        <VictoryScreen population={g.population} day={g.day} served={g.served} earned={g.earned} />
      )}

      {g.phase === 'game' && (
        <>
          <StatusBar
            day={g.day}
            custIdx={g.custIdx}
            maxCustPerDay={g.maxCustPerDay}
            warmth={g.warmth}
            wC={g.wC}
            population={g.population}
            popCap={g.popCap}
            money={g.money}
            activeEvent={g.activeEvent}
            storyMsg={g.storyMsg}
            onInfoModal={g.setInfoModal}
          />

          {/* Page content */}
          <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
            {g.tab === 'register' && (
              <RegisterPanel
                dayPhase={g.dayPhase}
                day={g.day}
                dayServed={g.dayServed}
                dayMissed={g.dayMissed}
                dayEarned={g.dayEarned}
                warmth={g.warmth}
                cust={g.cust}
                custIdx={g.custIdx}
                maxCustPerDay={g.maxCustPerDay}
                totalStock={g.totalStock}
                changeGiven={g.changeGiven}
                changeNeeded={g.changeNeeded}
                changeStack={g.changeStack}
                patProg={g.patProg}
                shakeCash={g.shakeCash}
                beepItems={g.beepItems}
                fled={g.fled}
                shopBg={SHOP_BG}
                onNextDay={g.nextDay}
                onSetDayPhase={g.setDayPhase}
                onTapItem={g.tapItem}
                onTapDenom={g.tapDenom}
              />
            )}

            {g.tab === 'warehouse' && (
              <WarehousePage prods={g.allProds} inv={g.inv} onProdModal={g.setProdModal} />
            )}

            {g.tab === 'settlement' && (
              <SettlementPage
                nextProj={g.nextProj}
                money={g.money}
                built={g.built}
                storyLog={g.storyLog}
                onBuildProj={g.buildProj}
              />
            )}

            {g.tab === 'upgrades' && (
              <UpgradesPage money={g.money} upg={g.upg} upgCost={g.upgCost} onBuyUpg={g.buyUpg} />
            )}
          </div>

          <BottomNav active={g.tab} onChange={g.setTab} />

          {g.prodModal && (
            <ProductModal
              product={g.prodModal}
              inv={g.inv}
              money={g.money}
              wsMult={g.wsMult}
              onClose={() => g.setProdModal(null)}
              onSetPrice={g.setPrice}
              onBuyStock={g.buyStock}
            />
          )}

          {g.infoModal && (
            <InfoModal
              type={g.infoModal}
              warmth={g.warmth}
              warmRate={g.warmRate}
              wC={g.wC}
              population={g.population}
              popCap={g.popCap}
              hasInfirmary={g.hasInfirmary}
              onClose={() => g.setInfoModal(null)}
            />
          )}

          {g.result && <ResultPopup result={g.result} />}
        </>
      )}
    </div>
  );
}
