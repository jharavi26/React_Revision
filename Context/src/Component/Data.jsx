import React, { useEffect, useState } from 'react'

const Data = () => {

  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  const [password, setPassword ] = useState(false)

const getData = async ()=>{
  const data = await fetch("https://dummyjson.com/users");
  const result = await data.json();
  setData(result.users)
  console.log(result);
}

useEffect(()=>{
  getData();
},[])

const handleClick = ()=>{
  setIndex((prev)=>prev+1);
}

    return (
    <div>

      <div>
  {data.length > 0 ? (
    <div>
      <span>Name: {data[index].firstName}</span>
      <img src={data[index].image} alt={data[index].firstName} />
      <button onClick ={handleClick}>Change</button>
    </div>
  ) : (
    <p>Loading...</p>
  )}

  <input type={password ? "text" : "password"} placeholder='Enter Your Password'></input>

  <button onClick={()=>setPassword(!password)}>{password ? "Hide" : "Show"}</button>
</div>
    
    </div>
  )
}

export default Data
