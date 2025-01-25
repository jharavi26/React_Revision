import React, { useState } from 'react'

const Todo = () => {

  const [todo, setTodo]  = useState([]);
  const [inputvalue, setInputValue] = useState('');

  const handleChange = (e)=>{
    setInputValue(e.target.value); 
  }

  const handleClick = ()=>{
    setTodo([...todo, inputvalue]);
    setInputValue("")
   
  }
  const handleDelete = (indexdelete)=>{
    setTodo(todo.filter((_, index)=> index !== indexdelete))
  }
  
  return (
    <div>
      <input type = "text" value={inputvalue} placeholder='Enter a todo' onChange={handleChange}></input>
      <button onClick={handleClick}>Add into List</button>

      <ul>
        {
          todo.map((item, index)=>(
            <li key ={index}>{item }<button onClick={()=>handleDelete(index)} style={{marginLeft:"20px"}}>Delete</button></li>
          ))
        }

      </ul>
      
    </div>
  )
}

export default Todo
