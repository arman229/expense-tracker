import React from 'react';

import './App.css';
import {Header} from "./components/header";
import {Balance} from "./components/Balance";
import {IncomeExpense} from "./components/IncomeExpense";
import {TransactioList} from "./components/TransactionList";
import {AddTransaction} from "./components/AddTransaction";
import {GlobalProvider} from "./context/GlobalState";

function App() {
    return (
        <GlobalProvider>
            <Header/>
            <div className="container">
                <Balance/>
                <IncomeExpense/>
                <TransactioList/>
                <AddTransaction/>
            </div>
        </GlobalProvider>
    );
}

export default App;
