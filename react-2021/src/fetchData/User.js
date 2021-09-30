import React from "react";

const User = (props) => {
  const { login, avatar_url, html_url, site_admin } = props.user;
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-3">
      <div className="card">
        <img src={avatar_url} alt="user" className="card-img-top" />
        <div className="card-body">
          <h4 className="card-text3">{login}</h4>
          <p>Site admin: {site_admin ? "yes" : "no"}</p>
          <a
            href={html_url}
            className="card-link"
            target="_blank"
            rel="noreferrer"
          >
            Go to profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default User;
