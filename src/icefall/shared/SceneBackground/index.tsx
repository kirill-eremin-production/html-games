import type { ReactNode } from 'react';

interface Props {
  /** URL заднего фона (самый дальний слой сцены) */
  background?: string;
  /** URL переднего фона (например, прилавок, перекрывающий midground) */
  foreground?: string;
  /** Контент между задним и передним фоном (например, персонаж за прилавком) */
  midground?: ReactNode;
  /** Интерактивный UI поверх всей сцены */
  children?: ReactNode;
}

export function SceneBackground({ background, foreground, midground, children }: Props) {
  return (
    <div data-testid="scene-root" className="absolute inset-0 overflow-hidden">
      <div data-testid="scene-backdrop" className="pointer-events-none absolute inset-0">
        {background && (
          <img
            data-testid="scene-background"
            src={background}
            alt=""
            className="absolute inset-0 z-0 h-full w-full object-cover"
            draggable={false}
          />
        )}

        {midground && (
          <div data-testid="scene-midground" className="absolute inset-0 z-[1]">
            {midground}
          </div>
        )}

        {foreground && (
          <img
            data-testid="scene-foreground"
            src={foreground}
            alt=""
            className="absolute inset-0 z-[2] h-full w-full object-cover"
            draggable={false}
          />
        )}

        <div data-testid="scene-overlay" className="absolute inset-0 z-[3] bg-black/25" />
      </div>

      {children && (
        <div data-testid="scene-content" className="absolute inset-0 z-[4] flex flex-col">
          {children}
        </div>
      )}
    </div>
  );
}
