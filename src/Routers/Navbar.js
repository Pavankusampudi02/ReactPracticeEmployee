import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){

  return (
    <div>
        <ul>
            {/* <Link to="/"><li>Home</li></Link>
            <Link to="/dashboard"><li>Dashboard</li></Link>
            <Link to="/about"><li>About</li></Link> */}
          
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/dashboard">Dashboard</Link></li>
            <li><Link to ="/about">About</Link></li>

        </ul>
    </div>
  )
}
