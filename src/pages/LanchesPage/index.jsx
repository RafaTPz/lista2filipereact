// LanchesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LanchesPage() {
  const [lanches, setLanches] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:38000/lanches')
      .then(response => {
        setLanches(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar lanches:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lanches</h2>
      <ul>
        {lanches.map(lanche => (
          <li key={lanche.id}>
            <Link to={`/lanches/${lanche.id}`}>{lanche.produto}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanchesPage;
