import React, { createContext } from 'react'
import { Delete2 } from './delete2'
const BioData=createContext()
export const Delete1 = () => {
  return (
    <BioData.Provider value="niyamathullah">
    <div>
            <Delete2 />
    </div>
    </BioData.Provider>
  )
}

export {BioData}