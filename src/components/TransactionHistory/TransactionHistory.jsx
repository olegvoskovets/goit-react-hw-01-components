import { Transaction } from './Transaction';
import style from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transaction_history}>
      <thead>
        <tr className={style.header}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <Transaction
            key={item.id}
            item={item}
            className={style.transaction}
          />
        ))}
      </tbody>
    </table>
  );
};
