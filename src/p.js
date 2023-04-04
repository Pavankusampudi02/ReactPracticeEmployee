import { useState } from "react"
import React from 'react'

export const p = () => {
    const [data,setdata] = useState({
        username : '',
        password : '',
    })

    const {username,password} = data
    const dataFunctions = a => {
        setdata({...data, [a.target.name]:[a.target.value]})
    }
    
    const SubmitFunction = b =>{
        b.preventDefault();
        console.log(data)
    }

  return (
    <div>
    <center>
        <form onChange={SubmitFunction}>
            <input type='text' placeholder="Enter Username" value={username} name="username" onChange={dataFunctions} />
            <input type = 'password' placeholder="Enter Password" value={password} name="password" onChange={dataFunctions}/>
            <input type='submit' name='submit' />
        </form>
    </center>
    </div>
  )
}
