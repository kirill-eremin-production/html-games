import { Thermometer, Users } from "lucide-react";

interface Props {
  type: "warmth" | "pop";
  warmth: number;
  warmRate: number;
  wC: string;
  population: number;
  popCap: number;
  hasInfirmary: boolean;
  onClose: () => void;
}

export function InfoModal({ type, warmth, warmRate, wC, population, popCap, hasInfirmary, onClose }: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        {type === "warmth" && (
          <>
            <div className="mb-2.5 flex items-center gap-2 text-base font-bold text-[#70b0d8]">
              <Thermometer size={20} />
              Температура посёлка
            </div>
            <div className="text-xs leading-7 text-[#5a7a9a]">
              <div>
                Сейчас: <b style={{ color: wC }}>{Math.round(warmth)}°</b>
              </div>
              <div>
                Падает: <b>{warmRate.toFixed(2)}°/сек</b>
              </div>
              <div className="mt-1.5 border-t border-[#1a2a3a] pt-1.5">
                <div>• Тепло постоянно падает из-за мороза</div>
                <div>• Продажа топлива (🔥) повышает температуру</div>
                <div>• Стройте котлы, чтобы замедлить падение</div>
                <div className="mt-1 text-[#c06040]">
                  • При t &lt; 25°: люди уходят{hasInfirmary ? " (лазарет защищает до 10°)" : ""}
                </div>
                <div className="text-[#c03030]">
                  • При t &lt; 10°: люди гибнут{hasInfirmary ? " даже с лазаретом" : ""}
                </div>
                <div className="mt-1 text-[#5a9a7a]">• При t &gt; 55°: приходят беженцы (+население)</div>
              </div>
            </div>
          </>
        )}
        {type === "pop" && (
          <>
            <div className="mb-2.5 flex items-center gap-2 text-base font-bold text-[#70b0d8]">
              <Users size={20} />
              Население
            </div>
            <div className="text-xs leading-7 text-[#5a7a9a]">
              <div>
                Жителей: <b>{population}</b> / {popCap} мест
              </div>
              <div className="mt-1.5 border-t border-[#1a2a3a] pt-1.5">
                <div>• Больше людей → больше покупателей</div>
                <div>• Стройте бараки, чтобы увеличить лимит мест</div>
                <div className="mt-1 text-[#5a9a7a]">• При t &gt; 55°: беженцы приходят (в начале дня)</div>
                <div className="text-[#c06040]">• При t &lt; 25°: люди уходят</div>
                {hasInfirmary && <div className="text-[#70b0d8]">• 🩺 Лазарет: люди выживают до 10°</div>}
              </div>
            </div>
          </>
        )}
        <button
          className="tap mt-3 w-full rounded-lg border border-[#4a90c022] bg-[rgba(70,144,192,.08)] px-5 py-2 text-xs text-[#4a90c0]"
          onClick={onClose}
        >
          Понятно
        </button>
      </div>
    </div>
  );
}
