import React from 'react';
import ExpenseItem from './ExpenseItem';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
const ExpenseList = props => (
    <div>
        <h1>Expense List</h1>
        <div>
            {props.expenses.map(expense => {
                return <ExpenseItem {...expense} key={expense.id} />;
            })}
        </div>
    </div>
);

const mapStateToProps = state => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
};

export default connect(mapStateToProps)(ExpenseList);
