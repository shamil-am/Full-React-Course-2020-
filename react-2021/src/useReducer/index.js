import React, { useEffect, useState, useReducer } from "react";
import { defaultValue } from "./defaultState";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      return {
        ...state,
        people: [...state.people, action.payload],
        isModalOpen: true,
        modalContent: `${action.payload.name} Added`,
      };
    case "REMOVE_PERSON":
      return {
        ...state,
        people: state.people.filter(
          (person) => person.id !== action.payload.id
        ),
        isModalOpen: true,
        modalContent: `${action.payload.name} Removed`,
      };
    case "INVALID_INFO":
      return {
        ...state,
        isModalOpen: true,
        modalContent: `Please fill the all field`,
      };
    default:
      return state;
  }
};
// COMPONENT AREA
const Index = () => {
  const [person, setPerson] = useState({
    id: "",
    name: "",
    surname: "",
  });
  //State area
  const [state, dispatch] = useReducer(reducer, defaultValue);
  //Functions area
  const removeUser = (person) => {
    dispatch({
      type: "REMOVE_PERSON",
      payload: person,
    });
  };
  const personHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const sumbitHandler = (e) => {
    e.preventDefault();
    if (person.name && person.surname) {
      dispatch({
        type: "ADD_PERSON",
        payload: { ...person, id: new Date().getTime().toLocaleString() },
      });
      //Reset input
      setPerson({
        id: "",
        name: "",
        surname: "",
      });
    } else {
      dispatch({
        type: "INVALID_INFO",
      });
    }
  };
  //Effects area
  useEffect(() => {
    console.log(state.people);
  }, [state.people]);
  ////
  return (
    <div className="container">
      {state.isModalOpen && <h1>{state.modalContent}</h1>}
      <form className="form" onSubmit={sumbitHandler}>
        <div className="form-control">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={person.name}
            onChange={personHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="surname">Surname: </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={person.surname}
            onChange={personHandler}
          />
        </div>
        <button className="btn btn-dark">Save</button>
      </form>
      <ul>
        {state.people.map((person) => {
          return (
            <li className="my-2" key={person.id}>
              {person.surname} {person.name}{" "}
              <button
                className="btn btn-danger"
                onClick={() => removeUser(person)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
