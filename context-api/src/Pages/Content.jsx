import React from 'react';
import { MyContext } from '../context/Context';
import { useContext } from 'react';

function Content() {

  const {name, changeName } = useContext(MyContext);
  return (
    <div>
      <h1>Content</h1>

      <input type = "text" onChange={changeName}></input>
      <p>{name}</p>
      
    </div>
  )
}

export default Content
