import React, { Component } from 'react';

class Counter extends Component {
    //state={
       // value:this.props.counter.value,
   // };
   // handleIncrement=()=>{
   //  this.setState({value:this.state.value+1})   ;
    //}
    //handleDecrement=()=>{
     //   this.setState({value:this.state.value-1})   ;
       //}
    render() { 
    
        return (
               <div>
                  <span className='badge badge-primary m-2'>{this.props.counter.value}</span>
                  <button className='btn btn-secondary sm' onClick={()=> this.props.onIncrement(this.props.counter)}>Increment</button>
                  <button  className='btn btn-warning m-2' onClick={()=> this.props.onDecrement(this.props.counter)}>Decrement</button>
                  <button onClick={()=>this.props.onDelete(this.props.counter.id)} 
                  className='btn btn-danger btn-sm m-2' 
                  >Delete</button>
                </div>
                );
    }
   
    
    }

 
export default Counter ;