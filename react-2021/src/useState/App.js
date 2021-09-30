import React, { useState } from "react";
import { People } from "./Data/PeopleData";
////
const App = () => {
  const [people, setPeople] = useState(People);
  const [myMessage, setMymessage] = useState("");
  const [person, setPerson] = useState({
    name: "Shamil",
    age: 27,
    message: "This is my message",
  });
  const [count, setCount] = useState(0);
  //
  const deleteUser = (user) => {
    let answ = window.confirm(`Are you agree delete ${user.name}`);
    if (answ !== true) return;
    setPeople((prevState) => {
      const newData = prevState.filter((person) => person.id !== user.id);
      return newData;
    });
  };
  const inputChangeHandler = (e) => {
    setMymessage(e.target.value);
  };
  const changeMessage = () => {
    setPerson({ ...person, message: myMessage });
  };
  const changeCount = (payload) => {
    setCount((prevState) => {
      return prevState + payload;
    });
    // setCount(count + payload);
  };
  const changeCountDelay = () => {
    setTimeout(() => {
      setCount((prevState) => prevState + 2);
    }, 2000);
  };
  // const deleteUser2 = (user) => {
  //   let answ = window.confirm(`Are you agree delete ${user.name}`);
  //   if (answ === true) {
  //     const personIndex = people.findIndex((person) => person.id === user.id);
  //     people.splice(personIndex, 1);
  //     setPeople([...people]);
  //   }
  // };
  //
  return (
    <div>
      <ul>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <li
              key={id}
              style={{
                padding: ".5rem",
                margin: ".5rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2> {name}</h2>
              <button onClick={() => deleteUser(person)}>X</button>
            </li>
          );
        })}
      </ul>
      <button onClick={() => setPeople([])}>clear all</button>
      <hr />
      <hr />
      <h4>
        {person.name}- {person.age}
        <p>{person.message}</p>
        <input
          type="text"
          value={myMessage}
          onChange={(e) => inputChangeHandler(e)}
        />
        <button onClick={() => changeMessage(myMessage)}>change message</button>
      </h4>
      <hr />
      <h1>Counter section</h1>
      <h4>Count: {count}</h4>
      <button onClick={() => changeCount(+1)}>+1</button>
      <button onClick={() => changeCount(-1)}>-1</button>
      <button onClick={changeCountDelay}>+2 after 10sec</button>
      <hr />
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default App;
