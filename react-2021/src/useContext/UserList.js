import React, { useContext } from "react";
import User from "./User";
import { UserContext } from "./context";

//////////
const UserList = () => {
  const { users } = useContext(UserContext);
  return (
    <div className="col-12">
      <ul className="list-group">
        {users.map((user) => {
          return (
            <li className="list-group-item" key={user.id}>
              <User {...user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
