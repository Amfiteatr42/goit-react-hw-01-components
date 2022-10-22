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
      {items.map(item => {
        return <tr key={item.id}>
          <Type>{item.type}</Type>
          <Tdata>{item.amount}</Tdata>
          <Tdata>{item.currency}</Tdata>
        </tr>
      })}
    </tbody>
  </Table>
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape)
}