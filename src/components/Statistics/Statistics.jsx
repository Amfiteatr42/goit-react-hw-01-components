import PropTypes from 'prop-types';
import {Title, StatList, StatItem, Container} from './Statistics.styled'

export function Statistics({ title, stats }) {

  return <Container>
  {title && <Title>{title}</Title>}

    <StatList>
      {stats.map(({id, label, percentage}) => {
        return <StatItem key={id}>
          <span>{label}</span>
          <span> {percentage}%</span>
        </StatItem>
      })}
    </StatList>
  </Container>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
}