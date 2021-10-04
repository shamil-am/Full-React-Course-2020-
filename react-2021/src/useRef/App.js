import React, { useState, useRef, useEffect } from "react";
import RefReciever from "./RefReciever";
//////
const App = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    age: "",
  });
  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const ageRef = useRef(null);
  //
  const valueHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setUser((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };
  const submitHandler = (e) => {
    const { name, surname, age } = user;
    e.preventDefault();
    if (!name || name.length <= 2) {
      nameRef.current.focus();
      alert("Name can not be empty!");
      return;
    }
    if (!surname || surname.length <= 2) {
      surnameRef.current.focus();
      alert("Suename can not be empty!");
      return;
    }
    if (!age) {
      ageRef.current.focus();
      alert("Age can not be empty!");
      return;
    }
    if (age < 18) {
      ageRef.current.focus();
      alert("Age can not be under 18!");
      return;
    }
    alert("saved!");
    console.log(user);
    setUser({
      name: "",
      surname: "",
      age: "",
    });
  };
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  //
  return (
    <div className="container">
      <h1>useRef</h1>
      <form className="form" onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="name">Name</label>{" "}
          <input
            type="text"
            id="name"
            ref={nameRef}
            value={user.name}
            name="name"
            onChange={valueHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="surname">Surname</label>{" "}
          <input
            type="text"
            id="surname"
            ref={surnameRef}
            value={user.surname}
            name="surname"
            onChange={valueHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age</label>{" "}
          <input
            type="text"
            id="age"
            ref={ageRef}
            value={user.age}
            name="age"
            onChange={valueHandler}
          />
        </div>
        <button className="btn btn-success">Save</button>
      </form>
      <RefReciever propRef={[ageRef, surnameRef]} />
    </div>
  );
};

export default App;
