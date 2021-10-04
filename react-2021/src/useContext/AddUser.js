import React, { useState, useContext } from "react";
import { UserContext } from "./context";
///component
const AddUser = () => {
  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    surname: "",
    age: "",
  });
  //function area
  const handleInputs = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setNewUser((prevState) => {
      return {
        ...prevState,
        [inputName]: value,
      };
    });
  };
  const { addUser } = useContext(UserContext); //from context
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ ...newUser, id: new Date().getTime().toString() });
    setNewUser({
      name: "",
      surname: "",
      age: "",
    });
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newUser.name}
            onChange={handleInputs}
          />
        </div>
        <div className="form-control">
          <label htmlFor="surname">Surname: </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={newUser.surname}
            onChange={handleInputs}
          />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age: </label>
          <input
            type="text"
            id="age"
            name="age"
            value={newUser.age}
            onChange={handleInputs}
          />
        </div>
        <button className="btn btn-success"> ADD</button>
      </form>
    </>
  );
};

export default AddUser;
