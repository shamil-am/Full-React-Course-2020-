import React, { useState, useEffect } from "react";

const App = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className="container">
      <h1>Contidional rendering</h1>
      <button onClick={handleShow}>Show/Hider</button>
      {show && <Item />}
    </div>
  );
};

const Item = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const setSizeHandler = () => {
    setSize((prevState) => {
      return {
        ...prevState,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    });
  };
  useEffect(() => {
    window.addEventListener("resize", setSizeHandler);
  },[]);
  return (
    <div>
      <h2>Width: {size.width}</h2>
      <h2>Height: {size.height}</h2>
    </div>
  );
};

export default App;
