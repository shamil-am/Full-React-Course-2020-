import React from "react";
import PropTypes from "prop-types";

///
const User = ({ first_name, last_name, avatar, email }) => {
  return (
    <div className="card">
      <img
        src={avatar}
        alt={first_name}
        className="card-img-top"
        style={{ width: "100%", height: "16rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{first_name}</h5>
        <p className="card-text">{last_name}</p>
        <a href={`mailto: ${email}`} className="btn btn-primary">
          Send mail
        </a>
      </div>
    </div>
  );
};

User.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default User;
