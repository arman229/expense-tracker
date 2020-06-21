import React, {useContext, useState} from "react";
import {GlobalContext} from "../context/GlobalState";
import {Transaction} from "./Transaction";

export const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext)

    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)

    function onSubmit(e) {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
    }

    return <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" required="required" value={text} onChange={(e) => setText(e.target.value)}
                       placeholder="Enter text..."/>
            </div>
            <div className="form-control">
                <label htmlFor="amount"
                >Amount <br/> (negative - expense, positive - income)
                </label>
                <input required="required" type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                       placeholder="Enter amount..."/>
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </>
}