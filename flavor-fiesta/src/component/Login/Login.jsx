import { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import loginImage from '../../assets/iniciarsesion.jpg';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      // Aquí puedes manejar la respuesta de la API
      console.log(response.data);
    } catch (err) {
      setError('El usuario no existe o las credenciales son incorrectas.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h1 className='bienvenida'>Bienvenida</h1>
        <h2 className='ingresa-tus-datos'>Ingresa tus datos para acceder a tu cuenta</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="show-password-button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">Iniciar Sesión</button>
        </form>
        <p className='registrate'>¿No tienes cuenta? <a href="/register">Regístrate aquí</a></p>
      </div>
      <div className="login-image">
        <img src={loginImage} alt="Login" />
      </div>
    </div>
  );
};

export default LoginPage;
