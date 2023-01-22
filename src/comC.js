import React from 'react'
import { useContext } from 'react'
import { BioData } from './comA'
export const ComC = () => {
    const status=useContext(BioData)
  return (
    <div>
        <h1>{status}</h1>
        </div>
  )
}
