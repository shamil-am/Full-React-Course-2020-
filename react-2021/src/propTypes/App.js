import React, { useState, useEffect } from "react";
import User from "./User";
const url = "https://reqres.in/api/users?page=2";

/////////
const App = () => {
  const [users, setUsers] = useState([]);
  const getUser = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        setUsers(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser(url);
  }, []);
  console.log(users); //array gelir ama asagida mapda error verir
  ///
  return (
    <div className="container">
      <div className="row">
        {" "}
        <h1>propTypes usage</h1>
      </div>
      <div className="row">
        {Array.from(users).map((user) => {
          return (
            <div className="col-6 col-md-3 my-2" key={user.id}>
              <User {...user} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
