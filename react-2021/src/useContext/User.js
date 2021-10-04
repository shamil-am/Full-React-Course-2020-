import React, { useContext } from "react";
import {UserContext} from "./context";

////
const User = ({ name, surname, age, id }) => {
  const { removeUser } = useContext(UserContext);

  return (
    <div className="card bg bg-info col-4">
      <div className="card-body">
        <h5 className="card-title">
          {name} {surname}
        </h5>
        <p className="card-text">{age}</p>
        <button className="btn btn-danger" onClick={() => removeUser(id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default User;
