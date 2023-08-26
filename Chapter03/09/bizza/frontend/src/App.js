import React from "react";
import useFetchSpeakers from "./useFetchSpeakers";

const App = () => {
  const API_URL = "https://dummyjson.com/users";
  const [data] = useFetchSpeakers(API_URL);
  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.firstName} {item.lastName}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;