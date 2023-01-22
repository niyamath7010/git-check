import { useState } from "react"


export default function HocMain(){
    return(
        <>
        <h1>Hoc</h1>
        <Hoc cmp={<Counter/>} />
        <HocGreen cmp={<Counter/>} />
        </>
    )
}


function Hoc(props){
    return(
        <>
            <h2 style={{backgroundColor:"red", width:"80px"}}>{props.cmp}</h2>
        </>
    )
}

function HocGreen(props){
    return(
        <>
        <h2 style={{backgroundColor:"blue", width:"80px"}}>{props.cmp}</h2>
        </>
    )
}


function Counter(){
    const [count,setCount]=useState(0)
    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>update</button>
        </>
    )
}