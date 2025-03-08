import React, { useContext } from 'react'
import { MyContext } from '../context/Context'

function Home() {

const {name, changeName } = useContext(MyContext);

  return (
    <div>
      <h1>Home</h1>

      <input type = "text" onChange={changeName}></input>
      <p>{name}</p>
      
    </div>
  )
}

export default Home
