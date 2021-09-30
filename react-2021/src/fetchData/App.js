import React from "react";
import { useState, useEffect } from "react";
import User from "./User";
const url = "https://api.github.com/users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const getUsers = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        setTimeout(() => {
          setUsers(result);
          setLoaded(!loaded);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  ///////
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-3">
          <h1 className="text-center">Github users</h1>
        </div>
        {loaded ? (
          users.map((user) => {
            return <User user={user} key={user.id} />;
          })
        ) : (
          <h1>LOADING...</h1>
        )}
      </div>
    </div>
  );
};

export default App;
