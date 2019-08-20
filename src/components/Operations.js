import React, { Component } from 'react';

class Operations extends Component {
    
        constructor() {
            super()
            this.state = {
                amount: "",
                vendor: "",
                category: "",
                showInsuffiecientMessage: false
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
            this.props.pushTransaction( { amount: Number(this.state.amount) , vendor: this.state.vendor , category: this.state.category} )
        }

        pushWithdraw = () =>{
            if( (this.props.balance() - this.state.amount) > 500 ){
            this.props.pushTransaction({ amount: Number(`-${this.state.amount}`) , 
            vendor: this.state.vendor , 
            category: this.state.category})
            } else {
                this.setState({
                    showInsuffiecientMessage : true 
                })
                setTimeout(()=>{this.setState({
                    showInsuffiecientMessage : false 
                })
                }, 3000);
            }
        }


        render() {
        return (
            <div className="inputSection">
                <input name="amount" type="number" placeholder="Amount" onChange={this.changer}></input>
                <input name="vendor" type="text" placeholder="Vendor" onChange={this.changer}></input>
                <input name="category" type="text" placeholder="Category" onChange={this.changer}></input>
                <br></br>
                <button onClick={this.pushDeposit}>Deposit</button>
                <button onClick={this.pushWithdraw}>Withdraw</button>
                <div id="message">{this.state.showInsuffiecientMessage ? "Insufficient Funds" : null}</div>
            </div>

        );
    }
}

export default Operations;