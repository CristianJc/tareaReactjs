import React, { useState } from "react";

//definiendo stylos en contaste

// ? estilo para usuario loggeado
const loggedStyle ={
  backgroundColor:'green',
  color: 'while',
  fontWeigth: 'bold'

 }
 const unloggedStyle ={
  backgroundColor:'tomato',
  color: 'while',
  fontWeigth: 'bold'
 }

const GreetingStyled = (props) => {
  //generamos un estado para el componente y ase manejar  si es usuario esta loggeado  no
  const [logged, setLogged] = useState(false);
  const greetingUser = () => <p> Hola, {props.name}</p>;
  const pleaseLogin = () => <p> Logueate Care Verga</p>;

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? greetingUser() : pleaseLogin()}
      <button
        onClick={() => {
          console.log("pulsado");
          setLogged(!logged);
        }}
      >
        {logged ? "logout" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyled;
