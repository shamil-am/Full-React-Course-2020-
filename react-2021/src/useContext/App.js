import React, { useState } from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";
import { UserContext } from "./context";

///////
const App = () => {
  const [users, setUsers] = useState([]);
  //function area
  const addUser = (user) => {
    setUsers((prevState) => {
      return [...prevState, user];
    });
  };
  const removeUser = (id) => {
    setUsers((prevState) => {
      return prevState.filter((user) => user.id !== id);
    });
  };
  return (
    <UserContext.Provider value={{ users, addUser, removeUser }}>
      <div className="container">
        <h1>Context Api</h1>
        <div className="row">
          <div className="col-12">
            <AddUser />
          </div>
        </div>
        <div className="row">
          <UserList />
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default App;
