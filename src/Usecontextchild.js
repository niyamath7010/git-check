import React, { useContext } from 'react'
import { myName } from './UseContextparent'
export const Usecontextchild = () => {
    const status=useContext(myName)
  return (
    <div>
            <h1>
                h1, {status}
            </h1>

    </div>
  )
}
