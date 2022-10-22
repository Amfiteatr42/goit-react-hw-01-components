import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem'
import { FriendListStyled } from './FriendList.styled'

export function FriendList({ friends }) {
  return <FriendListStyled className="friend-list">
    {friends.map(friend => {
      return <FriendListItem
        avatar={friend.avatar}
        isOnline={friend.isOnline}
        key={friend.id}
        name={friend.name} />
    })}
</FriendListStyled>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    key: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }))
}