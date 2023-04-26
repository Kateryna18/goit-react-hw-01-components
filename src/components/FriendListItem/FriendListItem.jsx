import PropTypes from 'prop-types';
import clsx from "clsx";
import css from 'components/FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({avatar, name, isOnline}) => {

  return (
    <li className={css.item} >
      <img className={css.avatar} src={avatar} alt="User avatar" width="100" />
      <div>
      <p className={css.name}>{name}</p>
      <span className={clsx(css.status, {
        [css.online]: isOnline
      })}
      >{isOnline ? "online" : "offline"}</span>
      </div>
    </li>
  );
};


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}