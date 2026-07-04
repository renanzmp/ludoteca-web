import React, { useState } from 'react';
import API from '../services/api';

function Register({ onRegisterSuccess, onSwitchToLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('auth/register/', { username, password, email });
      setIsError(false);
      setMessage('Conta criada com sucesso! Redirecionando para o login...');
      setTimeout(() => {
        onRegisterSuccess();
      }, 2000);
    } catch (err) {
      setIsError(true);
      setMessage('Erro ao criar conta. Escolha outro nome de utilizador.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Criar Nova Conta</h2>
      {message && <p className={isError ? 'error-message' : 'success-message'}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nome de utilizador" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="E-mail (Opcional)" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Palavra-passe" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Registar</button>
      </form>
      <p>
        Já tem uma conta?{' '}
        <span className="auth-link" onClick={onSwitchToLogin}>
          Faça login
        </span>
      </p>
    </div>
  );
}

export default Register;