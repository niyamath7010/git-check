import React, { useEffect } from 'react'

export const FunctionCounter = ({number}) => {
    useEffect(()=>{

        console.log("component updated")
        return()=>{
            console.log("functional component unmounted")
        }
    },[number])
  return (
    <div>
        <h1>{number}</h1>
    </div>
  )
}
