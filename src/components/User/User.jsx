import PropTypes from 'prop-types';
import style from './User.module.css';
import { Stats } from './Stats';

export const User = ({ user }) => {
  const { username, tag, location, avatar } = user;

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

User.propTypes = {
  user: PropTypes.object,
  username: PropTypes.string,
  tag: PropTypes.string,
  avatar: PropTypes.string,
  location: PropTypes.string,
};
