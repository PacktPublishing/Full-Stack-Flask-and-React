import React, { useEffect, useState } from "react";
const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const API_URL = "https://dummyjson.com/users";

        const fetchSpeakers = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();

                setData(data.users);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchSpeakers();
    }, []);

    return (
        <>
        <ul>
      {data.map(item => (
        <li key={item.id}>
          {item.firstName} {item.lastName}
        </li>
      ))}
    </ul>
        </>
    );
};
export default App;