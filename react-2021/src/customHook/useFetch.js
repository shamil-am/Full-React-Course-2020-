import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) return;
        const result = await response.json();
        setData(result);
        setLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [url]);

  return [data, loaded];
};
