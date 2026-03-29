import { useEffect, useState } from 'react';

import s from './Market.module.css';

interface Props {
  portrait?: string;
  name: string;
}

export function MarketCharacter({ portrait, name }: Props) {
  const [stage, setStage] = useState(1);

  useEffect(() => {
    setStage(1);
    const t2 = setTimeout(() => setStage(2), 1000);
    const t3 = setTimeout(() => setStage(3), 2000);
    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [portrait, name]);

  const img = portrait ? (
    <img src={portrait} alt={name} className={s.figure} draggable={false} />
  ) : (
    <div className={s.placeholder} />
  );

  return (
    <div className={s.wrap}>
      <div className={`${s.layer} ${s.s1} ${stage === 1 ? s.visible : ''}`}>{img}</div>
      <div className={`${s.layer} ${s.s2} ${stage === 2 ? s.visible : ''}`}>{img}</div>
      <div className={`${s.layer} ${s.s3} ${stage === 3 ? s.visible : ''}`}>{img}</div>
    </div>
  );
}
