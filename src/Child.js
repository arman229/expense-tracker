import React, {useContext} from 'react';
import './App.css';
import {TransactionContext} from "./transContext";
import {TransactionReducer} from "./transReducer";

function Child() {
let transactions= useContext(TransactionContext)
    return (

        <div className="container">
            <h1 className="text-center">Expense tracker</h1>
            <h3>your balance <br/> 2233$ </h3>
            <div className="expense-container">
                <h3>Income<br/>223$</h3>
                <h3>Expense<br/>233$</h3>
            </div>
            <h3>History</h3>
            <hr/>
            <ul className="transaction-list">
                {transactions.map((tranObj, ind) => {
                    return (<li key={ind}>
                            <span>{tranObj.desc}</span>
                            <span>{tranObj.amount}</span>
                        </li>
                    )
                })}

            </ul>
            <h3>Add new transaction</h3>
            <hr/>
            <form className="transaction-form">
                <label>Enter Discription</label><br/>
                <input type="text" required="required"/><br/>
                <label>Enter Amount</label><br/>
                <input type="number" required="required"/>
                <input type="submit" value="Add Transaction"/>
            </form>
        </div>
    );
}

export default Child;
