import React from "react";
import User from "./User";
import { useFetch } from "./../customHook/useFetch";
const url = "https://api.github.com/users";

const People = () => {
  const [data, loaded] = useFetch(url);
  ///////
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-3">
          <h1 className="text-center">Github users</h1>
        </div>
        {loaded ? (
          data.map((user) => {
            return <User {...user} key={user.id} />;
          })
        ) : (
          <h1>LOADING...</h1>
        )}
      </div>
    </div>
  );
};

export default People;
