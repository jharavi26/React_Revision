import { useReducer } from "react";


function Reducer() {

  const reducer = (state, action )=>{
    switch (action.type){
      case "increment":
        if(state.count>2){
        return {count : state.count+1};
        }
        return state;
      case "decrement":
        return {count : state.count-1}
      case "reset" :
        return {count : 0}
      default : 
      return state
    }
  }

  const [state , dispatch] = useReducer(reducer , {count : 3});




  return (
    <div className='container'>
      <h1>UseReducer Hook</h1>
      <p>Count is {state.count}</p>
      <button onClick = {()=>dispatch({type : "increment"})}>Increment</button>
      <button onClick={()=>dispatch({type : "decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type : "reset"})}>Reset</button>

    </div>
  )
}

export default Reducer
