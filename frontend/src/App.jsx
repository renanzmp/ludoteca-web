import { useState, useEffect } from 'react';
import api from './services/api';
import './App.css'; // Importando nosso novo arquivo de estilos

function App() {
  const [games, setGames] = useState([]);
  const [newGame, setNewGame] = useState({ title: '', genre: '', developer: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = () => {
    api.get('/games/')
      .then((response) => setGames(response.data))
      .catch((error) => console.error("Erro ao buscar jogos:", error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/games/${editingId}/`, newGame);
        setEditingId(null);
      } else {
        await api.post('/games/', newGame);
      }
      setNewGame({ title: '', genre: '', developer: '' });
      fetchGames();
    } catch (error) {
      console.error("Erro ao salvar jogo:", error);
      alert("Erro ao salvar o jogo.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este jogo?")) {
      try {
        await api.delete(`/games/${id}/`);
        fetchGames();
      } catch (error) {
        console.error("Erro ao deletar jogo:", error);
      }
    }
  };

  const handleEdit = (game) => {
    setNewGame({ title: game.title, genre: game.genre, developer: game.developer });
    setEditingId(game.id);
  };

  const handleCancelEdit = () => {
    setNewGame({ title: '', genre: '', developer: '' });
    setEditingId(null);
  };

  return (
    <div className="container">
      <h1>Ludoteca Web 🎮</h1>
      
      <div className="form-container">
        <h3>{editingId ? 'Editar Jogo' : 'Cadastrar Novo Jogo'}</h3>
        <form onSubmit={handleSubmit} className="game-form">
          <input 
            type="text" 
            placeholder="Título do Jogo" 
            value={newGame.title}
            onChange={(e) => setNewGame({...newGame, title: e.target.value})}
            required
          />
          <input 
            type="text" 
            placeholder="Gênero (ex: RPG, Ação)" 
            value={newGame.genre}
            onChange={(e) => setNewGame({...newGame, genre: e.target.value})}
            required
          />
          <input 
            type="text" 
            placeholder="Desenvolvedora" 
            value={newGame.developer}
            onChange={(e) => setNewGame({...newGame, developer: e.target.value})}
            required
          />
          
          <div className="button-group">
            <button type="submit" className="btn-primary">
              {editingId ? 'Salvar Alterações' : 'Adicionar Jogo'}
            </button>
            
            {editingId && (
              <button type="button" onClick={handleCancelEdit} className="btn-cancel">
                Cancelar
              </button>
            )}
          </div>
        </form>
      </div>

      <h2>Catálogo de Jogos</h2>
      {games.length === 0 ? (
        <p>Nenhum jogo cadastrado ainda.</p>
      ) : (
        <ul className="game-list">
          {games.map((game) => (
            <li key={game.id} className="game-card">
              <div className="game-info">
                <strong>{game.title}</strong>
                <p>{game.genre} • {game.developer}</p>
              </div>
              <div className="action-buttons">
                <button type="button" onClick={() => handleEdit(game)} className="btn-icon" title="Editar">✏️</button>
                <button type="button" onClick={() => handleDelete(game.id)} className="btn-icon" title="Deletar">🗑️</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;