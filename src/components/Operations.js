import React, { Component } from 'react';

class Operations extends Component {
    
        constructor() {
            super()
            this.state = {
                Amount: "",
                Vendor: "",
                Category: ""
            }
        }
    
        changer = (e) => {
           const value =  e.target.value
           const name =  e.target.name
    
           this.setState({
               [name]: value
           })    
        }

        pushDeposit = () =>{
            this.props.pushTransaction({ amount: Number(this.state.Amount) , vendor: this.state.Vendor , category: this.state.Category})
        }

        pushWithdraw = () =>{
            if( (this.props.balance() - this.state.Amount) > 500 ){
            this.props.pushTransaction({ amount: Number(`-${this.state.Amount}`) , 
            vendor: this.state.Vendor , 
            category: this.state.Category})
            } else{
                document.getElementById("message").append("Insufficient Funds")
            }
        }


        render() {
        return (
            <div className="inputSection">
                <label for="inp" className="inp"><input name="Amount" type="number" placeholder="Amount" onChange={this.changer}></input></label>
                <input name="Vendor" type="text" placeholder="Vendor" onChange={this.changer}></input>
                <input name="Category" type="text" placeholder="Category" onChange={this.changer}></input>
                <br></br>
                <button onClick={this.pushDeposit}>Deposit</button>
                <button onClick={this.pushWithdraw}>Withdraw</button>
                <div id="message"></div>
            </div>

        );
    }
}

export default Operations;