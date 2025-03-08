import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({children})=>{

  const [name , setName] = useState("Art");
  const [theme, setTheme] = useState("light")

  const changeName = (e)=>{
    setName(e.target.value)
  }

  const toggleTheme = ()=>{
    setTheme((prev)=>prev === "light" ? "dark" : "light")
  }

  return (
    <MyContext.Provider value = {{name , changeName , theme , toggleTheme}}>
      {children}
    </MyContext.Provider>
  )
}

