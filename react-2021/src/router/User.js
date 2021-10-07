import React from "react";
import { Link } from "react-router-dom";

////
const User = (props) => {
  const { login, avatar_url, site_admin, id } = props;
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-3">
      <div className="card">
        <img src={avatar_url} alt="user" className="card-img-top" />
        <div className="card-body">
          <h4 className="card-text3">{login}</h4>
          <p>Site admin: {site_admin ? "yes" : "no"}</p>
          <Link className="card-link" to={`/people/${id}`}>
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
