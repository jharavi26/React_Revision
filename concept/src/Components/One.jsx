import { useState } from "react" ;

export default function One() {

   const [password, setPassword] = useState(false);
   const [btnStatus , setBtnStatus] = useState(false)
  
    const handleClick = ()=>{
      setPassword(!password);
      setBtnStatus(true);
      setTimeout(() => {
        setBtnStatus(false)  
      }, 3000);
    }

  return (
    <div>
        <input type={password  ? "text" : "password"}></input>
        <br/>
        <button onClick={handleClick} disabled ={btnStatus}>{password ? "HIDE" : "SHOW "}</button>
        
    </div>
  )
}
