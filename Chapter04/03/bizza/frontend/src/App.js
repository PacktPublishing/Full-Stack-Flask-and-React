import React, { useEffect, useState } from "react";
import axios from 'axios';
const App = () => {
     const [data, setData] = useState([]);
     const getSpeakers = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
                        .then(response => {
                            setData(response.data)
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