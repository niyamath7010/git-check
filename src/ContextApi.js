import { createContext } from "react";
import { Component } from "react";
import ChildApi from "./ContextApi2";

const MyName=createContext()
export default class Context extends Component{
    state={
        name:"niyamathullah",
        age:24
    }
    render(){
        return(
            <>
            <MyName.Provider value={this.state}>
                <ChildApi />
            </MyName.Provider>
            </>
        )
    }
}

export {MyName}