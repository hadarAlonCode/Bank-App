import React, { Component } from 'react';

class Breakdown extends Component {

     duplicate =(array)=>{
         let breakdown = {}
        for(let t of array){
          if(breakdown[t.category]){
            breakdown[t.category] += t.amount
          } else {
            breakdown[t.category] = t.amount 
          }
        }
        return Object.entries(breakdown)
             
     }


    render() {
        return (
            <div>
              { this.duplicate(this.props.data).map(t=> <div id="category" > <span className="vendor">{t[0]}</span><span className="amount">{t[1]}</span> </div>) }
            </div>
        );
    }
}


export default Breakdown;