import PropTypes from 'prop-types';
import { OnlineStatus } from './FriendLIstItem.styled'

export function FriendListItem({ avatar, name, isOnline }) {
  return <li className="item">
    <OnlineStatus className="status" isOnline={isOnline}></OnlineStatus>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
}