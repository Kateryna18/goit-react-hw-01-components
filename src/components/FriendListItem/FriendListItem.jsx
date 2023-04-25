import PropTypes from 'prop-types';

export const FriendListItem = (friend) => {
    const { avatar, name, isOnline, id } = friend;

  return (
    <li className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};


// FriendListItem.propTypes = {
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//     id: PropTypes.number.isRequired,
// }