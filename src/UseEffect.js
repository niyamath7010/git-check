import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const UseEffected = () => {
    const [count,setCount]=useState(0)

    const updateCount=()=>{
        setCount(count+1)
    }

    useEffect(()=>{
        console.log("component ")
    },null)

  return (
    <>
    <div>this couter clicked {count} times</div>
    <button onClick={updateCount}></button>
    </>
  )
}
