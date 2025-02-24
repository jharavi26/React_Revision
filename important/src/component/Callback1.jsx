import React from 'react'

function Callback1 ({filterNames}) {
  console.log("child component rendered")
  return (
    <div>
      <ol>
        {
          filterNames().map((item, index)=>{
            return <li key = {index}>{item}</li>
          })
        }
      </ol>
      
    </div>
  )
}

export default React.memo(Callback1)
