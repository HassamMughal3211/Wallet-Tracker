import transactionReducer  from "./Transactions/TransactionsReducers";

var rootReducer = combineReducers({
    transactions: transactionReducer
})

export default rootReducer;