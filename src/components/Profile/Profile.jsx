import PropTypes from 'prop-types';
import { Container, Avatar, Name, StatsList } from './Profile.styled'

export function Profile({ avatar, location, stats, tag, username }) {
 return <Container>
  <div>
    <Avatar
      src={avatar}
      alt="User avatar"
    
    />
    <Name>{username}</Name>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <StatsList>
    <li>
      <span>Followers</span>
      <span> {stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
       <span> {stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span> {stats.likes}</span>
    </li>
  </StatsList>
</Container>
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    likes: PropTypes.number,
    views: PropTypes.number,
  }),
}