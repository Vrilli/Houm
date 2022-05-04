import React from "react";
import { useNavigate } from "react-router";
import { register } from "../firebaseConfig";
import { useForm } from "../hooks/useForm";
import "../styles/Registro.css";

const Registro = () => {
  const [values, handleInputChange] = useForm({
    username: "",
    email: "",
    email2: "",
    password: "",
    password2: "",
  });

  const { username, email, email2, password, password2 } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    register(email, password, username);
  };

  const Navigate = useNavigate();
  return (

    <div className="registro">
      <div className="contenedor-left">
        <h1>REGISTRO</h1>&nbsp;
        <span className="loginwith">
          <img src= "https://res.cloudinary.com/vrilli/image/upload/v1651103068/houm_ypthfu.png" width={150} height="auto" alt="" />
        </span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Nombre"
            onChange={handleInputChange}
            value={username}
          />
          <br />
          <br />
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={handleInputChange}
            value={email}
          />
          <br />
          <br />
          <input
            type="text"
            name="email2"
            placeholder="Confirme su E-mail"
            onChange={handleInputChange}
            value={email2}
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleInputChange}
            value={password}
          />
          <br />
          <br />
          <input
            type="password"
            name="password2"
            placeholder="Confirme su Contraseña"
            onChange={handleInputChange}
            value={password2}
          />
          <br />
          <br />
          <button className="inic" type="submit">Registrarte</button>
        </form>
        <button
          type="button"
          className="mt-3"
          onClick={() => {
            Navigate("/FormLogin");
          }}
        >
          Login
        </button>
        <br />
        <br />
      </div>

      <div className="contenedor-righ">
         
      <img src="https://res.cloudinary.com/vrilli/image/upload/v1651290163/Captura2_quqkv0.png" alt="" />
        
      </div>
    </div>
  );
};

export default Registro;
