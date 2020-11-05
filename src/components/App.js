import React, {useReducer} from 'react';

import '../App.css';
import {Header} from "./header";
import {Balance} from "./Balance";
import {IncomeExpense} from "./IncomeExpense";
import AppReducer from "../context/AppReducer";
import {TransactioList} from "./TransactionList";
import {AddTransaction} from "./AddTransaction";

const transactionsStore = {transactions: []};
export const TransactionsContext = React.createContext(transactionsStore);

function App() {

    const [state, dispatch] = useReducer(AppReducer, transactionsStore);

    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }

    return (
        <TransactionsContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction: deleteTransaction,
            addTransaction: addTransaction
        }}>
            <Header/>
            <div className="container">
                <Balance/>
                <IncomeExpense/>
                <TransactioList/>
                <AddTransaction/>
            </div>
        </TransactionsContext.Provider>
    );
}

export default App;
