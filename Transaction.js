import React, {useContext} from 'react';
import { GlobalContext } from './GlobalState';

export const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
  return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
          {transaction.text} <span>{sign}Rs{Math.abs(transaction.amount)}</span><button onclick={() => 
          deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>)
  
}
