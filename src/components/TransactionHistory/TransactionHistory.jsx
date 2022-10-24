import PropTypes from 'prop-types';
import { Tdata, Theader, Type, Table } from './Transaction.styled'

export function TransactionHistory({ items }) {
  return <Table className="transaction-history">
    <thead>
      <tr>
        <Theader>Type</Theader>
        <Theader>Amount</Theader>
        <Theader>Currency</Theader>
      </tr>
    </thead>

    <tbody>
      {items.map(({id, type, amount, currency}) => {
        return <tr key={id}>
          <Type>{type}</Type>
          <Tdata>{amount}</Tdata>
          <Tdata>{currency}</Tdata>
        </tr>
      })}
    </tbody>
  </Table>
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}
