import React, { createContext } from 'react'
import { Usecontextchild } from './Usecontextchild'
const myName=createContext()
export const UseContextparent = () => {
  return (
    <div>
        <myName.Provider value="niyamathullah">
            <Usecontextchild/>
        </myName.Provider>
        </div>
  )
}   

export {myName}