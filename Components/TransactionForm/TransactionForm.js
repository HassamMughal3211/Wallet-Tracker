import React from 'react'
import {connect} from 'react-redux';
import { v4  as uuid } from 'uuid';
import { addTransaction } from './../../Redux/Transactions/TransactionsActions';

class TransactionForm extends React.Component 
{
    state = {
        discription:"",
        amount:0,
        transtype:"expense"
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        var transactionObj = {
            ...this.state,
            amount : parseInt(this.state.amount),
            id: uuid()
        }
        this.props.addTransaction(transactionObj)
    }
    handleFormInput = (e) => {
        var {name,value} = e.target;
        this.setState({
            [name] : value 
        })
       

    }



    render = () => {
    return (
        <div>
            <form onSubmit={this.handleFormSubmit} >
                <input name="discription" value={this.state.discription} onChange={this.handleFormInput}  placeholder="discription"/>
                <input name="amount" value={this.state.amount}  onChange={this.handleFormInput} placeholder="amount"/>
                <select name="transtype" value={this.state.transtype} onChange={this.handleFormInput} >
                    <option>Expense</option>
                    <option>Income</option>
                </select>
                <button>ADD</button>
            </form>
        </div>
    )
}
}
var actions = {
    addTransaction
}   

export default connect(null,actions)(TransactionForm);
