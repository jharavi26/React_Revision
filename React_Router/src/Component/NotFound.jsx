import React, { useEffect } from 'react'
import { useNavigate , Link } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(() => {
   navigate("/")
    }, 3000);
  },[navigate])

  return (
    <div>
      <h3>
        Page is not Found
      </h3>
      <p>Loading to back Home Page</p>
      <br/>
      <Link to = "/">
      <button>Go to Home Page</button>
      </Link>
      
      
    </div>
  )
}

export default NotFound
