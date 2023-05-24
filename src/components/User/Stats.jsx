import PropTypes from 'prop-types';
import style from './User.module.css';

export const Stats = ({ stats }) => {
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

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

//  "followers": 5603,
//     "views": 4827,
//     "likes": 1308
