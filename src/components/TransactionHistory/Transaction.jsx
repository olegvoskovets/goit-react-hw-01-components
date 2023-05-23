import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

export const Transaction = ({ item }) => {
  const { type, amount, currency } = item;
  return (
    <tr className={style.void}>
      <td className={style.type}>{type}</td>
      <td className={style.amount}>{amount}</td>
      <td className={style.currency}>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  item: PropTypes.object,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
