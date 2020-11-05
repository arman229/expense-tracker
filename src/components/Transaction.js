import React, {useContext} from "react";
import {TransactionsContext} from "../App";

export const Transaction = ({transaction}) => {
    const {deleteTransaction}=useContext(TransactionsContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={()=> deleteTransaction(transaction.id)}>x</button>
        </li>
    )
};