import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addExpense({ description: 'Water bill', amount: 25 }));
store.dispatch(addExpense({ description: 'Gas bill' }));
store.dispatch(addExpense({ description: 'Rent' }));
store.dispatch(setTextFilter('water'));
const visibleExpenses = getVisibleExpenses(
    store.getState().expenses,
    store.getState().filters
);
console.log(visibleExpenses);
setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);
