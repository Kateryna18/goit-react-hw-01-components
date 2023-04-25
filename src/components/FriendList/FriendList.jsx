import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => 
            <FriendListItem
            friend={friend}/>)}
        </ul>
    )
}

// FriendList.propTypes = {
//     friends: PropTypes.arrayOf(PropTypes.shape),
// }