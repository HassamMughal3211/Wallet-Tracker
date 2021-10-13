import { ADD_TRANSACTION } from './TransactionsConstant';


export var addTransaction = (transactionObj) => ({
    type : ADD_TRANSACTION,
    payload:{
        transaction: transactionObj
    }
})