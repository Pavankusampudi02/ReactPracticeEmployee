import React, { useContext } from 'react'
import { store } from '../App'
export const Count = () => {
    const [data,setdata] = useContext(store)
  return (
    <div>
        {data.length}
    </div>
  )
}

