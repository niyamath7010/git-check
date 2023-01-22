import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const UseRef = () => {
    const [mydata,setMydata]=useState("")

    const count=useRef(0)
  
    useEffect(()=>{
        count.current=count.current+1
    })

  return (
    <div>
        <input
            type="text" 
            value={mydata}
            onChange={(e)=>setMydata(e.target.value)}
            ></input>
            <p>the number of time render : {count.current}</p>
    </div>
  )
}
