import React, { useContext } from 'react'
import { store } from '../App'

export const Display = () => {
    const [data,setdata] = useContext(store)
  return (
    <div>
        {data.map(d => <h5>{d.Brandname}</h5>)}
    </div>
  )
}
