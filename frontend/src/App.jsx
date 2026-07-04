import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import GameList from './components/GameList'; // O seu componente atual de listagem/CRUD
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [screen, setScreen] = useState('login'); // 'login' ou 'register'
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Verifica se já existe um utilizador logado ao abrir a página
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('username');
    if (token) {
      setIsAuthenticated(true);
      setUsername(storedUser || '');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    setScreen('login');
  };

  if (!isAuthenticated) {
    if (screen === 'register') {
      return (
        <Register 
          onRegisterSuccess={() => setScreen('login')} 
          onSwitchToLogin={() => setScreen('login')} 
        />
      );
    }
    return (
      <Login 
        onLoginSuccess={() => {
          setIsAuthenticated(true);
          setUsername(localStorage.getItem('username') || '');
        }} 
        onSwitchToRegister={() => setScreen('register')} 
      />
    );
  }

  return (
    <div className="app-container">
      <header className="main-header">
        <h1>Ludoteca Web</h1>
        <div className="user-info">
          <span>Olá, <strong>{username}</strong>!</span>
          <button className="logout-button" onClick={handleLogout}>Sair</button>
        </div>
      </header>
      
      <main>
        {}
        <GameList />
      </main>
    </div>
  );
}

export default App;