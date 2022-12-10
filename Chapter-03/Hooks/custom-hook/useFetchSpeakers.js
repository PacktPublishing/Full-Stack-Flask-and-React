import { useEffect, useState } from "react";

const useFetchSpeakers = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setData(data.users);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchSpeakers();
  }, [url]);

  return [data];
};

export default useFetchSpeakers;
