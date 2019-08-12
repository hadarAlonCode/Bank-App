import React, { Component } from 'react';

class Transaction extends Component {
    render() {
        return (
            <div className="transaction" style={ this.props.transaction.amount >= 0 ? { backgroundColor: "#76e476"} : { backgroundColor: "#ec7575"} } >
              <span className="vendor"> {this.props.transaction.vendor}  </span> <span className="amount">{this.props.transaction.amount}$ </span>
            </div>
        );
    }
}

export default Transaction;