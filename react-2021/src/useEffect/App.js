import React, { useState, useEffect } from "react";

const App = () => {
  const [size, setSize] = useState(window.innerWidth);

  // const changeSize = () => {
  //   setSize(window.innerWidth);
  // };
  //
  useEffect(() => {
    console.log("hello");
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setSize(window.innerWidth);
      });
    };
  });
  //
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{size} px</h2>
    </div>
  );
};

export default App;
