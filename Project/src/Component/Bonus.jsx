import React, { useState } from 'react'

function Bonus() {

  const [bonus, setBonus] = useState({points:0})

  const increment = ()=>{
    setBonus({points:bonus.points+1})

  }
  return (
    <div className='card'>
      <h4>
        <b>Bonus Component</b>
        </h4>
        <h3>Total Point : {bonus.points}</h3>
        <button onClick={increment}>Increment</button>
      
      
    </div>
  )
}

export default Bonus
