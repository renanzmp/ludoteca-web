import React, { useState } from 'react';
import API from '../services/api';

function Login({ onLoginSuccess, onSwitchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // O JWT do Django espera a chave 'username', então passamos o email dentro dela
      const response = await API.post('auth/login/', { username: email, password });
      
      localStorage.setItem('token', response.data.access);
      // Guardamos o email no localStorage para mostrar no Header do App.jsx
      localStorage.setItem('username', email); 
      onLoginSuccess();
    } catch (err) {
      setError('E-mail ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Entrar na Ludoteca</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Seu E-mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Entrar</button>
      </form>
      <p>
        Não tem uma conta?{' '}
        <span className="auth-link" onClick={onSwitchToRegister}>
          Registre-se aqui
        </span>
      </p>
    </div>
  );
}

export default Login;