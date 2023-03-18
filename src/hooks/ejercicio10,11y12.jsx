import React, { useState, useEffect } from "react";

const Rectangulo = ({ mouseInAction, propStyle, mouseUnAction }) => {
  return (
    <div
      style={propStyle}
      onPointerEnter={mouseInAction}
      onPointerLeave={mouseUnAction}
      onDoubleClick={mouseUnAction}
    >
      {" "}
    </div>
  );
};

let red = 0;
let green = 0;
let blue = 0;
const Ejercicio1011y12 = () => {
  const [inMouse, setInMouse] = useState({
    backgroundColor: `rgb(${red},${green}, ${blue})`,
    color: "black",
    width: "255px",
    height: "255px",
  });

  const [mouseIn, setMouseIn] = useState(false);

  useEffect(() => {
    if (mouseIn) {
      mouseInAction();
      const timerID = setInterval(() => mouseInAction(), 1000);
      return () => {
        clearInterval(timerID);
      };
    }
  }, [mouseIn]);

  const mouseInAction = () => {
    setMouseIn(true);
    let redC = Math.floor(Math.random() * 255);
    let greenC = Math.floor(Math.random() * 255);
    let blueC = Math.floor(Math.random() * 255);

    setInMouse({
      backgroundColor: `rgb(${redC},${greenC}, ${blueC})`,
      color: "black",
      width: "255px",
      height: "255px",
    });
  };

  const mouseUnAction = () => {
    setMouseIn(false);
  };

  let optionRender;

  optionRender = (
    <Rectangulo
      propStyle={inMouse}
      mouseInAction={mouseInAction}
      mouseUnAction={mouseUnAction}
    >
      {" "}
    </Rectangulo>
  );

  return <div> {optionRender}</div>;
};

export default Ejercicio1011y12;
