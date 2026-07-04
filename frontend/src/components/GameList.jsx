import React, { useState, useEffect } from 'react';
import API from '../services/api';

function GameList() {
  const [games, setGames] = useState([]);
  
  // Estados para a criação de um novo jogo
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [developer, setDeveloper] = useState('');

  // Estados para o controlo da edição
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editGenre, setEditGenre] = useState('');
  const [editDeveloper, setEditDeveloper] = useState('');

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await API.get('games/');
      setGames(response.data);
    } catch (error) {
      console.error("Erro ao carregar jogos:", error);
    }
  };

  const handleAddGame = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('games/', { title, genre, developer });
      setGames([response.data, ...games]); 
      setTitle('');
      setGenre('');
      setDeveloper('');
    } catch (error) {
      console.error("Erro ao adicionar jogo:", error);
    }
  };

  const handleDeleteGame = async (id) => {
    try {
      await API.delete(`games/${id}/`);
      setGames(games.filter(game => game.id !== id));
    } catch (error) {
      console.error("Erro ao eliminar jogo:", error);
    }
  };

  // Ativa o modo de edição preenchendo os inputs com os dados atuais do jogo
  const startEditing = (game) => {
    setEditingId(game.id);
    setEditTitle(game.title);
    setEditGenre(game.genre);
    setEditDeveloper(game.developer);
  };

  // Cancela a edição e limpa os estados auxiliares
  const cancelEditing = () => {
    setEditingId(null);
    setEditTitle('');
    setEditGenre('');
    setEditDeveloper('');
  };

  const handleUpdateGame = async (id) => {
    try {
      // Envia a requisição PUT para o endpoint específico do jogo no Django
      const response = await API.put(`games/${id}/`, {
        title: editTitle,
        genre: editGenre,
        developer: editDeveloper
      });
      
      // Atualiza o estado local substituindo o registo antigo pelo atualizado
      setGames(games.map(game => game.id === id ? response.data : game));
      cancelEditing();
    } catch (error) {
      console.error("Erro ao atualizar jogo:", error);
    }
  };

  return (
    <div className="game-list-container">
      <h2>A Minha Coleção de Jogos</h2>

      {/* Formulário de Adição */}
      <form onSubmit={handleAddGame} className="add-game-form">
        <input 
          type="text" 
          placeholder="Título do Jogo" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Gênero (ex: RPG, Ação)" 
          value={genre} 
          onChange={(e) => setGenre(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Desenvolvedora" 
          value={developer} 
          onChange={(e) => setDeveloper(e.target.value)} 
          required 
        />
        <button type="submit">Adicionar Jogo</button>
      </form>

      {/* Lista de Jogos */}
      {games.length === 0 ? (
        <p className="empty-message">Nenhum jogo cadastrado. Comece adicionando um acima!</p>
      ) : (
        <ul className="games-grid">
          {games.map(game => (
            <li key={game.id} className="game-card">
              {editingId === game.id ? (
                /* Formulário Inline que substitui o card durante a Edição */
                <div className="edit-game-inputs">
                  <input 
                    type="text" 
                    value={editTitle} 
                    onChange={(e) => setEditTitle(e.target.value)} 
                    required 
                  />
                  <input 
                    type="text" 
                    value={editGenre} 
                    onChange={(e) => setEditGenre(e.target.value)} 
                    required 
                  />
                  <input 
                    type="text" 
                    value={editDeveloper} 
                    onChange={(e) => setEditDeveloper(e.target.value)} 
                    required 
                  />
                  <div className="edit-actions">
                    <button className="save-btn" onClick={() => handleUpdateGame(game.id)}>Guardar</button>
                    <button className="cancel-btn" onClick={cancelEditing}>Cancelar</button>
                  </div>
                </div>
              ) : (
                /* Modo de Visualização Normal */
                <>
                  <div className="game-info">
                    <strong>{game.title}</strong>
                    <span>{game.genre} • {game.developer}</span>
                  </div>
                  <div className="game-actions">
                    <button className="edit-btn" onClick={() => startEditing(game)}>Editar</button>
                    <button className="delete-btn" onClick={() => handleDeleteGame(game.id)}>Remover</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GameList;