import { ADD_TRANSACTION } from './TransactionsConstant';

var initialState = [];

var transactionReducer = (state = intializeState , action) => {
     var {type, payload} = action;
     switch (type) {
         case ADD_TRANSACTION:
             return [...state,payload.transaction]
         default:
             return state;
     }
 }
 export default transactionReducer;
