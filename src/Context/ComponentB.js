import React from 'react'
import { useContext } from 'react'
import { store } from '../App'

export const ComponentB = () => {
  const [data,setdata] = useContext(store)
  return (
    <div>
      Component-B {data}
    </div>
  )
}
