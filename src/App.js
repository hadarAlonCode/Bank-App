import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom'
import Operations from './components/Operations';
import Transactions from './components/Transactions';
import axios from 'axios';
import Breakdown from './components/Breakdown'; 

// import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(){
      super()
      this.state = {
        data: []  
      }
    }

     pushTransaction = async (transcation) => {
        await axios.post("http://localhost:5000/transaction", transcation, function(response){
        console.log("POST complete")
      })

      this.getTranscations()
     
    }

    balanceSum = ()=>{
      let sum = 0 
      for(let d of this.state.data){
         sum += d.amount 
      }
      return sum
    }


    async getTranscations() {
      const response = await axios.get("http://localhost:5000/transcations")
      this.setState({ data: response.data })

    }
  
     componentDidMount = () => {
      this.getTranscations()
    }


  render() {
      return (
        <Router>
        <div className="App">
          <div className="title">Bank App</div>
          <div className="Balance" style={ this.balanceSum() >= 0 ? { color: "#76e476"} : { color: "red"} }>Balance: {this.balanceSum()} $</div>

           <Operations pushTransaction={this.pushTransaction} balance={this.balanceSum}/>
           <div className="bodyGrid">
            <Transactions data={this.state.data}/>
            <div className="breakDown">
              <div className="breakTitle">Breakdown</div>
              <Breakdown data={this.state.data} />
            </div>
           </div>
        </div>
        </Router>
      );
  }

}

export default App;
