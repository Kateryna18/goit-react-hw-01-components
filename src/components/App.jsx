import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';

export const App = () => {
  const {username, tag, location, avatar, stats} = user;

  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics
        dataStats={data}
        title={"Upload stats"}
      />
      <FriendList
        friends={friends}
      />
    </>
  );
};
