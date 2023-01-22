import React from 'react'
import { createContext } from 'react'
import { ComB } from './comB'
const BioData=createContext()
export const ComA = () => {
  return (
    <BioData.Provider value={"my interview was successfull"}>
    <div><ComB /></div>
    </BioData.Provider>
  )
}


export  {BioData}