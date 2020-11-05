import React, {useContext, useState} from "react";
import {TransactionsContext} from "./App";

export const AddTransaction = () => {
    const {addTransaction} = useContext(TransactionsContext);

    const [transactionTitle, setTransactionTitle] = useState("");
    const [amount, setAmount] = useState(0);

    function onSubmit(e) {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text: transactionTitle,
            amount: +amount
        };
        addTransaction(newTransaction)
    }

    return <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" required="required" value={transactionTitle} onChange={(e) => setTransactionTitle(e.target.value)}
                       placeholder="Enter text..."/>
            </div>
            <div className="form-control">
                <label htmlFor="amount"
                >Amount <br/> (negative - expense, positive - income)
                </label>
                <input required="required" type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                       placeholder="Enter amount..."/>
            </div>
            <button type="submit" className="btn">Add transaction</button>
        </form>
    </>
};