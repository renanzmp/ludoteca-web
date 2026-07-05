import React, { useState } from 'react';
import API from '../services/api';

function Register({ onRegisterSuccess, onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await API.post('auth/register/', { name, email, password });
    setIsError(false);
    setMessage('Conta criada com sucesso! Redirecionando...');
    setTimeout(() => {
      onRegisterSuccess();
    }, 2000);
  } catch (err) {
    setIsError(true);
    
    // Verifica se o backend respondeu com um erro específico (ex: validação do e-mail)
    if (err.response && err.response.data) {
      // Extrai a mensagem de erro do Django (pode vir como array ou string)
      const backendErrors = Object.values(err.response.data).flat().join(" ");
      setMessage(`Erro no cadastro: ${backendErrors}`);
    } else {
      // Se não houver resposta, costuma ser bloqueio de CORS ou servidor fora do ar
      setMessage('Erro de conexão. Verifique se o backend aceita esta origem (CORS).');
    }
    console.error("Detalhes do erro:", err);
  }
};

  return (
    <div className="auth-container">
      <h2>Criar Nova Conta</h2>
      {message && <p className={isError ? 'error-message' : 'success-message'}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Seu Nome (Como quer ser chamado)" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Seu melhor E-mail" 
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
        <button type="submit">Registrar</button>
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