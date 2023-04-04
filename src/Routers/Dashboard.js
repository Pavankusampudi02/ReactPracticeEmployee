import React from 'react'
import { useParams } from 'react-router-dom';

export const Dashboard = () => {
  let params = useParams();
  return (
    <div>
        <center>
          <h2> Dashboard Page is : {params.name}</h2>
        </center>
    </div>
  )
}

export default Dashboard;