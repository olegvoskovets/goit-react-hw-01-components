import React from 'react';
import style from './Statistics.module.css';
import { Stat } from './Stat';
import PropTypes from 'prop-types';

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

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
