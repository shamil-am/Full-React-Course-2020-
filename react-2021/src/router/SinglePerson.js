import React from "react";
import { useParams } from "react-router";
import User from "./User";
import { useFetch } from "./../customHook/useFetch";
const url = "https://api.github.com/users";

/////////
const SinglePerson = () => {
  const [data] = useFetch(url);
  const params = useParams();
  const user = data.find((user) => user.id === Number(params.id));
  return (
    <div>
      <User {...user} />
    </div>
  );
};

export default SinglePerson;
