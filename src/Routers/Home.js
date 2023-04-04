import React from 'react'
//import { Navigate } from 'react-router-dom  //navigate instead of Redirect
import { useNavigate } from 'react-router-dom'; //usenavigate instead of usehistory

export function Home(){
  let navigate = useNavigate();
  // const [auth,setauth] = useState(false)
  // if(auth){
  //   return <Navigate to = '/dashboard' />
  // }

     return (
    <div>
         <center>
          <h2>Home Page</h2><br/>
          <button onClick={() => navigate('/dashboard')}>Login</button>
          {/* <button onClick={()=> setauth(true)}>Login</button> */}
        </center>
    </div>
  )
}

export default Home;