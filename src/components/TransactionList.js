import React, {useContext} from "react";
import {Transaction} from "./Transaction";
import {TransactionsContext} from "./App";

export const TransactioList = () => {
    const {transactions} = useContext(TransactionsContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction =>
                    (<Transaction key={transaction.id} transaction={transaction}/>))
                }
            </ul>
        </>
    )
};