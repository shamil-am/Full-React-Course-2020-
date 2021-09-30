import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
  });
  const [persons, setPersons] = useState([]);
  //
  const handleValue = (e) => {
    let value = e.target.value;
    let dataTarget = e.target.name;
    setData((prevState) => {
      return {
        ...prevState,
        [dataTarget]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name || !data.email) return;
    const newUser = { ...data, id: new Date().getTime().toLocaleString() };
    alert(`name: ${data.name} email: ${data.email} saved!`);
    setPersons((prevState) => {
      return [...prevState, newUser];
    });
    //clear state after saved
    setData({
      id: "",
      name: "",
      email: "",
    });
  };
  const deleteUser = (user) => {
    let answ = window.confirm("Are you agree delete user?");
    if (!answ) return;
    setPersons((prevState) => {
      return prevState.filter((person) => person !== user);
    });
    alert(`${user.name} deleted!`);
  };
  return (
    <div className="container">
      <div className="row mb-2">
        <div className="col-12">
          <form>
            <div className="form-control">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={handleValue}
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email: </label>
              <input
                type="text"
                id="email"
                name="email"
                value={data.email}
                onChange={handleValue}
              />
            </div>
            <button className="btn btn-dark" onClick={handleSubmit}>
              Add person
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        {persons.map((person) => {
          const { name, email, id } = person;
          return (
            <div className="col-12 border border-success mb-2 p-2" key={id}>
              <h5> Name: {name}</h5>
              <h5> Email: {email}</h5>
              <button
                className="btn btn-danger"
                onClick={() => deleteUser(person)}
              >
                Delete user
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
