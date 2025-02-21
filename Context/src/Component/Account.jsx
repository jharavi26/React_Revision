import { useContext } from "react"
import { MyContext } from "./Context/context"



export const Account = ()=>{

  const {text, setText} = useContext(MyContext);
  return(
    <div>
      <h3>{text}</h3>
    </div>
  )

}