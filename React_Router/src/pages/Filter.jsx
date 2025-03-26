import React from 'react'
import { useSearchParams } from 'react-router-dom';

function Filter() {
  const [searchParams] = useSearchParams(); // Access query parameters
  const name = searchParams.get("name");  // "Ravi"
  const age = searchParams.get("age");    // "25"

  return (
    <div>
      <h2>Welcome, {name || "Guest"}!</h2>
      <p>Age: {age || "Unknown"}</p>
    </div>
  );
}

export default Filter
