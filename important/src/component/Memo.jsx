import React, { useState } from 'react'

function Memo({name}) {
  console.log("child component rendered")

  return (
    <div>
      <h1> Hello {name}</h1>
    
    </div>
  )
}

export default React.memo(Memo);
