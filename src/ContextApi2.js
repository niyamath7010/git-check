import { Component } from "react";
import {MyName} from "./ContextApi"

export default class ChildApi extends Component{
    render(){
        return(
            <>
                <MyName.Consumer>
                    {data=><h1>{data.age}</h1>}
                </MyName.Consumer>
            </>
        )
    }
}