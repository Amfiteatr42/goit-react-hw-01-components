import PropTypes from 'prop-types';
import {Title, StatList, StatItem, Container} from './Statistics.styled'

export function Statistics({ title, stats }) {

  return <Container>
  {title && <Title>{title}</Title>}

    <StatList>
      {stats.map(stat => {
        return <StatItem key={stat.id}>
          <span>{stat.label}</span>
          <span> {stat.percentage}%</span>
        </StatItem>
      })}
    </StatList>
  </Container>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  })),
}