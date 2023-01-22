import React, { useContext } from 'react'
import { BioData } from './delete1'
export const Delete2 = () => {
    const Status=useContext(BioData)
  return (
    <div>
        <h1>hi , {Status}</h1>
    </div>
  )
}
