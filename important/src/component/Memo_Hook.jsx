import React, { useState, useMemo } from "react";

const SumCalculator = () => {
  const [num1, setNum1] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  // Memoize the sum calculation
  const sum = useMemo(() => {
    console.log("Sum calculated!");
    return num1;
  }, [num1]); // Only recompute when num1 or num2 changes

  return (
    <div style={{ background: darkTheme ? "#333" : "#fff", color: darkTheme ? "#fff" : "#000", padding: "20px" }}>
      <h2>Sum Calculator</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      <h3>Sum: {sum}</h3>
      <button onClick={() => setDarkTheme((prev) => !prev)}>Toggle Theme</button>
    </div>
  );
};

export default SumCalculator;
