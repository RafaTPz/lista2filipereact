import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getLancheById, updateLanche, createLanche, deleteLanche } from '../../services/ApiService';

function ManagePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState('');

  useEffect(() => {
    if (id) {
      getLancheById(id)
        .then(lanche => {
          setProduto(lanche.produto);
          setPreco(lanche.preco);
          setImagem(lanche.imagem);
        })
        .catch(error => {
          console.error('Erro ao buscar lanche:', error);
        });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { produto, preco, imagem };
    try {
      if (id) {
        await updateLanche(id, data);
      } else {
        await createLanche(data);
      }
      navigate('/lanches');
    } catch (error) {
      console.error('Erro ao salvar lanche:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteLanche(id);
      navigate('/lanches');
    } catch (error) {
      console.error('Erro ao deletar lanche:', error);
    }
  };

  return (
    <div>
      <h2>Gerenciar Lanche</h2>
      <form onSubmit={handleSubmit}>
        <label>Produto:</label>
        <input type="text" value={produto} onChange={(e) => setProduto(e.target.value)} required />
        <label>Preço:</label>
        <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} required />
        <label>Imagem:</label>
        <input type="text" value={imagem} onChange={(e) => setImagem(e.target.value)} required />
        <button type="submit">{id ? 'Atualizar' : 'Criar'}</button>
        {id && <button onClick={handleDelete}>Deletar</button>}
      </form>
    </div>
  );
}

export default ManagePage;
