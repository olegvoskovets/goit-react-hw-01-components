import PropTypes from 'prop-types';
import style from './FriendList.module.css';

export const FriendListItem = ({ friend }) => {
  const { name, avatar, isOnline } = friend;

  const backColor = () => {
    const color = isOnline ? 'green' : 'red';
    return color;
  };

  return (
    <li className={style.item}>
      <span
        className={style.status}
        style={{ backgroundColor: backColor() }}
      ></span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
  }),
};
