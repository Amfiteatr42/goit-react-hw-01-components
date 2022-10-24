import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem'
import { FriendListStyled } from './FriendList.styled'

export function FriendList({ friends }) {
  return <FriendListStyled className="friend-list">
    {friends.map(({avatar, isOnline, id, name}) => {
      return <FriendListItem
        avatar={avatar}
        isOnline={isOnline}
        key={id}
        name={name} />
    })}
</FriendListStyled>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  })).isRequired
}