import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createStore } from 'redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
//Step 1
const initialState = { name:"REACT" };

//Step3
function reducer(state = initialState, action){                //It will receive state & action .
  console.log(action);

   if(action.type ==='UPDATE_NAME'){                           
    // state.name = action.value;                           //Never update state directly    
    const oldState = {...state};
    oldState.name = action.value;
    return oldState;                //This reducer function must return a state;                                                        
    
   }    
   return state;                            
                                //based on action ,return a state.                                           
}                                                                                       
//Step 4
const action = {
  type:"UPDATE_NAME",
  value:"JS"
  }

//Step 2
const store = createStore(reducer);

//Step 6
store.subscribe(()=>{
  console.log("Store Changed", store.getState());
});

//Step 5
store.dispatch(action);

console.log(store.getState());



