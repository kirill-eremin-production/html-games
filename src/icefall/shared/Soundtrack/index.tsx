import { Music, VolumeOff } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

import s from './Soundtrack.module.css';

interface Props {
  tracks: string[];
}

export function Soundtrack({ tracks }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [trackIdx, setTrackIdx] = useState(0);

  // prompt user on first load
  useEffect(() => {
    if (!tracks.length) return;
    const wants = window.confirm('Включить саундтрек?');
    if (wants) {
      startPlayback();
    }
  }, []);

  function startPlayback() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = tracks[trackIdx];
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {});
  }

  // when track ends, play next in loop
  const handleEnded = useCallback(() => {
    setTrackIdx((prev) => {
      const next = (prev + 1) % tracks.length;
      const audio = audioRef.current;
      if (audio) {
        audio.src = tracks[next];
        audio.play().catch(() => {});
      }
      return next;
    });
  }, [tracks]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      if (!audio.src) audio.src = tracks[trackIdx];
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  }, [playing, tracks, trackIdx]);

  // native touchstart for instant response
  const btnRef = useRef<HTMLButtonElement>(null);
  const touchedRef = useRef(false);
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
    <>
      <audio ref={audioRef} onEnded={handleEnded} />
      <button ref={btnRef} className={s.button} onClick={handleClick}>
        {playing ? <Music size={18} /> : <VolumeOff size={18} />}
      </button>
    </>
  );
}
