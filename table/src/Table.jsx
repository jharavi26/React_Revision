import React, { useEffect, useState } from "react";
import "./Table.css";

function Table() {
  const [data, setData] = useState([]); // Data for display
  const [originalData, setOriginalData] = useState([]); // Stores original data
  const [isAscending, setIsAscending] = useState(true);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  // Fetch Data from API
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/users?limit=50");
      const result = await response.json();
      setData(result.users);
      setOriginalData(result.users);
    };

    getData();
  }, []);


  const handlePage = (selectpage)=>{
    if(selectpage >=1 && selectpage <=data.length && selectpage !== page){
      setPage(selectpage);
    }
  }


  // Toggle Sorting by Age
  const sortByAge = () => {
    const sortedData = [...data].sort((a, b) =>
      isAscending ? b.age - a.age : a.age - b.age
    );
    setData(sortedData);
    setIsAscending(!isAscending);
  };

  // Search by Name
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter based on original data
    const filteredData = originalData.filter((person) =>
      person.firstName.toLowerCase().includes(value.toLowerCase())
    );

    setData(filteredData);
    setPage(1)
  };


  return (
    <div className="wrapper">
      {/* Search Input */}
      <input type="text" placeholder="Search by name..." value={query} onChange={handleChange} />

      <div className="container">
        <table className="table">
          <thead className="header">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>
                Age{" "}
                <span onClick={sortByAge} style={{ cursor: "pointer" }}>
                  {isAscending ? "⬆️" : "⬇️"}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.slice(page*10-10, page*10).map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.gender}</td>
                  <td>{item.age}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", padding: "10px" }}>
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="page">
      <span onClick={()=>handlePage(page-1)} className={page > 1 ? "" : "disable"}>◀️</span>
      {[...Array(data.length/10)].map((_, i)=>{
        return <span onClick={()=>handlePage(i+1)} className={page == i+1 ? "active" :  ""}>{i+1}</span>
      })}
      <span onClick={()=>handlePage(page+1)} className={page < (data.length)/10 ? "" : "disable"}>▶️</span>
      </div>
    </div>
  );
}

export default Table;
