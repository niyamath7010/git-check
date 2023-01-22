import { useEffect, useState } from "react"


function Nothing(){

    const [count,setCount]=useState(0)
  
    const increment=()=>{
      setCount(count+1)
    }
  
    useEffect(()=>{
      console.log("component updated")    
      return()=>{
        console.log("unmounted")
      }
    },[count])
  
    return(
      <>
        <h1>{count}</h1>
        <button onClick={()=>increment()}>click me </button>
      </>
    )
  }
  
  export default Nothing