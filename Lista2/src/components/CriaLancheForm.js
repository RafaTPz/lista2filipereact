import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import LancheService from '../services/LancheService';

function CriaLancheForm() {
    const [produto, setProduto] = useState('');
    const [preco, setPreco] = useState('');
    const [imagem, setImagem] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await LancheService.createLanche({ produto, preco: parseFloat(preco), imagem });
            console.log('Lanche criado com sucesso!');
            setProduto('');
            setPreco('');
            setImagem('');
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setError('Lanche não encontrado.');
            } else {
                setError('Erro ao criar lanche. Por favor, tente novamente mais tarde.');
            }
            console.error('Erro ao criar lanche:', error);
        }
    };

    return (
        <div>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="produto">
                    <Form.Label>Produto</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite o nome do produto"
                        value={produto}
                        onChange={(e) => setProduto(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="preco">
                    <Form.Label>Preço</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Digite o preço"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="imagem">
                    <Form.Label>Imagem</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="URL da imagem"
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Criar Lanche
                </Button>
            </Form>
        </div>
    );
}

export default CriaLancheForm;
