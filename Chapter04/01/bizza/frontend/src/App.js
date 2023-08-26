import React, { useEffect, useState } from "react";
const App = () => {
     const [data, setData] = useState([]);
     const getSpeakers = ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
                        .then((response) => response.json())
                        .then((data) => {
                            setData( data);
 })

    }
    useEffect(() => {
getSpeakers()
    },[]);
    return (
  <>
      <h1>Displaying Speakers Information</h1>
        <ul>
      {data.map(speaker => (
        <li key={speaker.id}>
          {speaker.name},  <em> {speaker.email} </em>
        </li>
      ))}
    </ul>
        </>  );
};

export default App;