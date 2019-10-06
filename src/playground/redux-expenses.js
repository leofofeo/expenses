import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

const expensesReducerDefaultState = [
    {
        id: -1,
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
    },
];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
    })
);
console.log(store.getState());

const demoState = {
    expenses: [
        {
            id: 'asdljfas',
            description: 'january rent',
            note: 'This is the final payment',
            amount: 54500,
            createdAt: 0,
        },
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or a mount
        startDate: undefined,
        endDate: undefined,
    },
};
