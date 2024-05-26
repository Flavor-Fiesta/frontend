import { useForm } from "react-hook-form";
import Img from "../../assets/chris-lee-70l1tDAI6rM-unsplash 1.jpg";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div id="whole-signupForm">
      <div id="signUpDiv" className="sigForm">
        <form id="signuoForm" onSubmit={handleSubmit(onSubmit)}>
          <h2>Creemos tu cuenta!</h2>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              className="inputText"
              type="text"
              {...register("nombre", {
                required: true,
                minLength: 10,
                maxLength: 50,
              })}
              id="nombre"
              placeholder="Enter your name"
            />
            {errors.nombre?.type === "required" && (
              <p>El campo nombre es requerido</p>
            )}
            {errors.nombre?.type === "minLength" && (
              <p>El campo nombre debe tener al menos 10 caracteres</p>
            )}
            {errors.nombre?.type === "maxLength" && (
              <p>El campo nombre debe tener menos de 50 caracteres</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo Electrónico</label>
            <input
              className="inputText"
              type="text"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
              id="correo"
              placeholder="Enter your email"
            />
            {errors.email?.type === "required" && (
              <p>El campo correo es requerido</p>
            )}
            {errors.email?.type === "pattern" && (
              <p>El formato del email es incorrecto</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="contrasena">Contraseña</label>
            <input
              className="inputText"
              type="password"
              {...register("contraseña", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
              id="contrasena"
              placeholder="Enter your password"
            />
            {errors.contraseña?.type === "required" && (
              <p>El campo contraseña es requerido</p>
            )}
            {errors.contraseña?.type === "minLength" && (
              <p>La contraseña debe tener al menos 6 caracteres</p>
            )}
            {errors.contraseña?.type === "maxLength" && (
              <p>La contraseña debe tener menos de 20 caracteres</p>
            )}
          </div>
          <div className="form-group" id="checkBox">
            <input
              type="checkbox"
              {...register("signUpCheckbox", { required: true })}
            />
            <label id="checkBoxLabel">
              I agree to the <a id="termsPolicy">terms & policy</a>
            </label>

            {errors.signUpCheckbox?.type === "required" && (
              <p>Debes aceptar los términos y políticas</p>
            )}
          </div>
          <input id="botonRegistrarse" type="submit" value="¡Regístrate!" />
        </form>
        <div id="signUpDiv" className="form-group">
          <div id="or">
            <hr className="horizontal-line"></hr>
            <h6>or</h6>
            <hr className="horizontal-line"></hr>
          </div>

          <span className="centered-span">
            ¿tienes cuenta?{" "}
            <Link id="iSesion" to="/login">
              Inicia sesión
            </Link>
          </span>
        </div>
      </div>
      <div id="signUpDiv">
        <img src={Img} alt="img de apoyo" id="imagenRegistro" />
      </div>
    </div>
  );
};

export default SignUp;