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

      this.componentDidMount()
     
    }

    Sum=()=>{
      let sum = 0 
      for(let d of this.state.data){
         sum += d.amount 
      }
      return sum
    }


    async getTranscations() {
      return axios.get("http://localhost:5000/transcations")
    }
  
    async componentDidMount() {
      const response = await this.getTranscations()
      console.log(response.data);
      this.setState({ data: response.data })
    }


  render() {
      return (
        <Router>
        <div className="App">
          <div className="title">Bank App</div>
          <div className="Balance" style={ this.Sum() >= 0 ? { color: "#76e476"} : { color: "red"} }>Balance: {this.Sum()} $</div>

           <Operations pushTransaction={this.pushTransaction} balance={this.Sum}/>
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
