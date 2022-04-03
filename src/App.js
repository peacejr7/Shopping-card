//import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import NavBar from './components/navBar';
import Counters from "./components/counters";
//function App() {
//  return 
//}
class App extends Component {
  state = {counters:[
    {id:1, value:9},
    {id:2, value:1},
    {id:3, value:0},
    {id:4, value:98},
    {id:5, value:4},
]  } 
handleReset=()=>{
    const counters= this.state.counters.map(c=>{
       c.value=0;
        return c;
    });
    this.setState({counters})
 }
handleDelete= counterId=>{
    const counters= this.state.counters.filter(c=>c.id!==counterId);
   this.setState({counters});
};
handleIncrement= counter=>{
    const counters=[...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});
};
handleDecrement= counter=>{
    const counters=[...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value--;
    this.setState({counters});
};
   
  render() { 
    return (
      <div>
        <NavBar 
        totalCounters={this.state.counters.filter(c=>c.value>0).length}
        />
      <main className='container'>
        <Counters
        counters={this.state.counters}
        onReset={this.handleReset}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        />
      </main>
      </div>
    );
  }
}
 
export default App;
