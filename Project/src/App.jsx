import React from "react";
import "./App.css";
import Account from "./Component/Account";
import Bonus from "./Component/Bonus";




function App() {
  return (
    <div className="App">
      <h2>Current Amount : </h2>
      <h2>Total Bonus : </h2>
      <Account />
      <Bonus />
      
    </div>
   
  );
}

export default App;
