import React from 'react';
import style from './User.module.css';

export const User = ({ user }) => {
  const { username, tag, location, avatar } = user;
  // const { followers, views, likes } = user.stats;

  const Stats = ({ stats }) => {
    var key = Object.keys(stats);

    return key.map(item => {
      return (
        <li key={item} className={style.stat_item}>
          <span className={style.label}>{item}</span>
          <span className={style.quantity}>{stats[item]}</span>
        </li>
      );
    });
  };

  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt={username} className={style.avatar} />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <Stats stats={user.stats} />
      </ul>
    </div>
  );
};
