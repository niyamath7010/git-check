import React, { Component } from 'react'
import ClassCounter from './ClassCounter'
// import { FunctionCounter } from './FunctionCounter'
export default class FirstCompo extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    increment(){
        this.setState(
           {count:this.state.count+1}
        )
    }

    componentDidMount(){
        console.log("component mounted sucessfully")
    }

  render() {
    return (
      <div>
        <ClassCounter number={this.state.count} />
        {/* <button onClick={this.increment.bind(this)}>+</button> */}
        <button onClick={()=>this.increment()}>+</button>
      </div>
    )
  }
}


