import { INTRO_TEXTS } from "../data";
import { ActionButton } from "../shared/ActionButton";

interface Props {
  step: number;
  onNext: () => void;
  onStart: () => void;
}

export function IntroScreen({ step, onNext, onStart }: Props) {
  const isLast = step === INTRO_TEXTS.length - 1;

  return (
    <div className="absolute inset-0 z-[200] flex flex-col bg-gradient-to-b from-[#060a12] to-[#0a1020]">
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="max-w-[400px] text-center">
          {INTRO_TEXTS.slice(0, step + 1).map((l, i) => (
            <div
              key={i}
              className="mb-3.5 whitespace-pre-line text-[15px] leading-[1.8] transition-colors duration-500"
              style={{
                color: i === step ? "#c0c8d8" : "#3a4a5a",
                animation: i === step ? "ti .5s ease" : undefined,
              }}
            >
              {l}
            </div>
          ))}
        </div>
      </div>
      <ActionButton
        text={isLast ? "Открыть лавку" : "Далее"}
        onClick={isLast ? onStart : onNext}
      />
    </div>
  );
}
