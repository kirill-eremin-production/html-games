import s from './MarketLabel.module.css';

interface Props {
  name: string;
  tierColor: string;
  tierName: string;
  desc: string;
}

export function MarketLabel({ name, tierColor, tierName, desc }: Props) {
  return (
    <div className={s.wrap}>
      <div className={s.badge}>
        <span className={s.name}>{name}</span>
        <span
          className={s.tier}
          style={{ color: tierColor, background: `${tierColor}20` }}
        >
          {tierName}
        </span>
      </div>
      <div className={s.desc}>{desc}</div>
    </div>
  );
}
