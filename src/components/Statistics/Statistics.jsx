import React from 'react';
import style from './Statistics.module.css';

const Stat = ({ stat }) => {
  const { label, percentage } = stat;

  const color = getRandomHexColor();

  console.log(color);
  return (
    <li className={style.item} style={{ backgroundColor: color }}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
  );
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const returnDeduction = array => {
  let newArray = [];

  array.forEach(item => {
    if (newArray.length === 0) {
      newArray.push(item);
    } else {
      newArray.forEach(item);
    }
  });
  console.log('newArray', newArray);
};

export const Statistics = ({ stats, title }) => {
  // const newArray = returnDeduction(stats);
  return (
    <section className={style.statistics}>
      <div className={style.header}>
        {title && <h2 className={style.title}>{title}</h2>}
      </div>
      <ul className={style.stat_list}>
        {stats.map(stat => (
          <Stat key={stat.id} stat={stat} />
        ))}
      </ul>
    </section>
  );
};
