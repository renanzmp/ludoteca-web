import React, { useState } from 'react';
import API from '../services/api';

function Login({ onLoginSuccess, onSwitchToRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('auth/login/', { username, password });
      // Guarda o token de acesso no navegador
      localStorage.setItem('token', response.data.access);
      localStorage.setItem('username', username);
      onLoginSuccess();
    } catch (err) {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Entrar na Ludoteca</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nome de utilizador" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Palavra-passe" 
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