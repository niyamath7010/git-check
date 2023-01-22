import React, { Component } from 'react'

export default class ClassCounter extends Component {

    componentDidUpdate(prevprops,prevstate){
        if(prevprops.number!== this.props.number){
            console.log("component updated")
        }
    }

    componentWillUnmount(){
        console.log("component unmouted sucessfully")
    }
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}
