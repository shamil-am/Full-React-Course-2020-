import React from "react";
import { useFetch } from "./useFetch";
const url = "https://jsonplaceholder.typicode.com/todos/1";

const App = () => {
  const [data, loaded] = useFetch(url);
  console.log(data);
  return (
    <div className="container">
      {!loaded ? <h1>Loading</h1> : <h1>Data Loaded!</h1>}
    </div>
  );
};

export default App;
