import React, { Component } from 'react';
import Transaction from './Transaction';

class Transactions extends Component {
    render() {
        return (
            <div className="transactionBox">
                {this.props.data.map((t, i) => <Transaction transaction={t} key={i}/>)}
            </div>
        );
    }
}

export default Transactions;