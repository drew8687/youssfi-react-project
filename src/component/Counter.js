import React, { Component } from 'react';
import Counter from './Counter';

 class Counter extends Component {
    constructor(props){
        super(props)
        this.state= {Counter :0 }
    }
  render() {
    return (
      <div>
      Counter<b>{this.props.title}</b>
      Value<b>{this.state.Counter}</b>
      <button onClick={()=>this.onAdd()}>Click to add {this.this.step.step}
    </button>
      </div>
    )
  }
  onAdd=()=>{
    this.setState({
        Counter:this.state.Counter+this.prop.step
    });

  }
}export default Counter;
