import React from "react";

const RefReciever = ({ propRef }) => {
  const [ageRef] = propRef;
  const clickRef = () => {
    ageRef.current.focus();
  };
  return (
    <div>
      <button onClick={clickRef} className="btn btn-warning">
        Focus to age ref
      </button>
    </div>
  );
};

export default RefReciever;
