import React, { useContext, useState } from "react";
import "./App.css";
import Bonus from "./Component/Bonus";
import { MyContext } from "./Component/Context/context";
import { Account } from "./Component/Account";





function App() {

  const [text, setText] = useState("Art")
  return (
    <div className="App">
      <h1>Change the Theme</h1>
      <MyContext.Provider value = {{text, setText}}>
        <Account />
      <Bonus />
    </MyContext.Provider>
      
      
    </div>
   
  );
}

export default App;
