import React, {useReducer} from 'react';

import './App.css';
import {Header} from "./components/header";
import {Balance} from "./components/Balance";
import {TransactioList} from "./components/TransactionList";
import {AddTransaction} from "./components/AddTransaction";
import {IncomeExpense} from "./components/IncomeExpense";

const transactionsStore = {transactions: []};
export const TransactionsContext = React.createContext(transactionsStore);

const transactionReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE':
            return {transactions: state.transactions.filter(transaction => transaction.id !== action.payload)};
        case 'ADD':
            return {transactions: [...state.transactions, action.payload]};
        default:
            return state
    }
};

function App() {

    const [state, dispatch] = useReducer(transactionReducer, transactionsStore);

    const deleteTransaction = (id) => {
        dispatch({type: "DELETE", payload: id});
    };

    const addTransaction = (transaction) => {
        dispatch({type: "ADD", payload: transaction});
    };

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
