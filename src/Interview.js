import { useEffect, useRef, useState } from "react"
import "./Style.css"

export default function App2(){
  const [count,setCount]=useState(0)

  const reset=useRef("")

    useEffect(()=>{
      reset.current=count+1
    },[count])



    return(
        <>
        <div className="App">
      <div className="counter">
        <button disabled={count <=0 ? true : false } onClick={()=>setCount(count-1)}  type="button">-</button>
        <p>{count}</p>
        <button  onClick={()=>setCount(count+1)} type="button">+</button>
        
      </div>
      <div >
        <p> final result  : {reset.current}</p>
      </div>
    </div>
        </>
    )
}

