import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginGoogle } from "../redux/actions/loginGoogle";
import { login } from "../firebaseConfig";
import "../styles/Login.css";


const FormLogin = () => {
  const dispatch = useDispatch();

  const iniciarSesion = (valores) => {
    login(valores.email, valores.password);
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          username: "",
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur }) => (

          <div className="contenedor" onSubmit={handleSubmit}>
            <div className="contenedor-left">
            <img src="https://res.cloudinary.com/vrilli/image/upload/v1651103068/houm_ypthfu.png" alt="" />
              <p>BIENVENIDO</p>
              <h3>Ingresa a tu cuenta propietario</h3>

              <button
                className="social-signin google"
                onClick={() => {
                  dispatch(loginGoogle());
                }}
              >
                <span
                  className="iconify"
                  data-icon="flat-color-icons:google"
                ></span>
                    Iniciar con Google
              </button>

              <div className="or">o</div>

              <div className="form-input">
                <input
                  className="imput1"
                  type="email"
                  name="email"
                  placeholder="Correo Electronico"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div> <br />

              <div className="form-input">

                <input
                  className="imput2"
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <input
                className="inicio"
                type="submit"
                name="signup_submit"
                value="Iniciar Sesión"
                onClick={() => iniciarSesion(values)}
              /><br />
              <Button
                className="ini"
                type="button"
                as={Link}
                to="/Registro"
                variant="primar"
              >
                ¿No tienes una cuenta? Registrate
              </Button>
            </div> 

            <div className="contenedor-right">
              <img
                src="https://res.cloudinary.com/vrilli/image/upload/v1651290152/Captura1_uab6zx.png"
                alt=""
              />

            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default FormLogin;
