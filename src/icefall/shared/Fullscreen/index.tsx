import { Maximize, Minimize } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

import s from './Fullscreen.module.css';

export function Fullscreen() {
  const [isFs, setIsFs] = useState(!!document.fullscreenElement);
  const btnRef = useRef<HTMLButtonElement>(null);
  const touchedRef = useRef(false);

  useEffect(() => {
    function onChange() {
      setIsFs(!!document.fullscreenElement);
    }
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  const toggle = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  }, []);

  const toggleRef = useRef(toggle);
  toggleRef.current = toggle;

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    function onTouch(e: TouchEvent) {
      e.preventDefault();
      touchedRef.current = true;
      toggleRef.current();
    }

    btn.addEventListener('touchstart', onTouch, { passive: false });
    return () => btn.removeEventListener('touchstart', onTouch);
  }, []);

  const handleClick = useCallback(() => {
    if (touchedRef.current) {
      touchedRef.current = false;
      return;
    }
    toggle();
  }, [toggle]);

  return (
    <button ref={btnRef} className={s.button} onClick={handleClick}>
      {isFs ? <Minimize size={18} /> : <Maximize size={18} />}
    </button>
  );
}
