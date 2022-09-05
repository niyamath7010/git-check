import React, { Component } from 'react'
 class Binding extends Component {
    constructor(props){
        super(props)
                this.state={
                    message: "hello from the programmer"
                }
       
    }

    handlerEVent(){
        this.setState({
            message:"good bye"
        })
            console.log(Object);
    }
  render() {
    return (
        <>
        <h1>{this.state.message}</h1>
      <button onClick={()=>{this.handlerEVent()}}> click me</button>
      </>
    )
  }
}

export default Binding