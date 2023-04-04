import React from 'react'
//import { Connect } from 'react-redux'
//import { increase,decrease } from './actions'

export const main = ({count,increase,decrease}) => {
  return (
    <div>
        Count from main component : {count} <br/>
        <button onClick={() => increase()}>Increase</button>
        <button onClick={() => decrease()}>Decrease</button>

    </div>
  )
}
