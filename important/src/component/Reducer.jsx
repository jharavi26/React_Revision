import React, { useReducer, useState } from 'react'


const countReducer = (state, action)=>{
  switch(action.type){
    case "INCREMENT" : 
    return {count : state.count+1};

    case "DECREMENT" :
      if(state.count > 0) return {count : state.count-1};
    default :
    return state;
  }

}

function Reducer() {
  

  const [state, dispatch] = useReducer(countReducer , {count : 0})


  return (
    <div>
      <button onClick={()=>dispatch({type : "INCREMENT"})}>Addition</button>
      {state.count}
      <button onClick={()=>dispatch({type : "DECREMENT"})}>Substraction</button>
      
    </div>
  )
}

export default Reducer
