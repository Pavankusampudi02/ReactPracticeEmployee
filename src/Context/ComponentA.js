import React from 'react'
import { useContext } from 'react'
import { store } from '../App'

export const ComponentA = () => {
  const [data,setdata] =useContext(store)
  return (
    <div>
      Component-A {data}
    </div>
  )
}
