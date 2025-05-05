import React, { useState, useMemo } from "react";

const SumCalculator = () => {
  const [num1, setNum1] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  // Memoize the sum calculation based on num1

  const sum = useMemo(() => {
    console.log("Sum calculated!");
    let total = 0;
    for (let i = 0; i < 100000; i++) {
      total += num1 * i;
    }
    return total;
  }, [num1]);                                          // Recalculates only when num1 changes

  return (
    <div
      style={{
        background: darkTheme ? "#333" : "#fff",
        color: darkTheme ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <h2>Sum Calculator</h2>
      <h3>Sum: {sum}</h3>                 
      <button onClick={() => setNum1(num1 + 1)}>Increment Number</button> 
      <button onClick={() => setDarkTheme((prev) => !prev)}>Toggle Theme</button>
    </div>
  );
};

export default SumCalculator;
