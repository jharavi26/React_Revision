import { ActionTypes } from "../contants/action-types"

const intialState ={
  products:[{
    id : 1,
    title :"Ravikumar",
    Category: "Genius",
  
  },
],
};



export const ProductReducer = (state = intialState, {type, payload} )=>{
  switch(type){
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }

};