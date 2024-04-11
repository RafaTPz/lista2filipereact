import axios from 'axios';

const API_URL = 'http://localhost:38000';

export async function getLancheById(id) {
  try {
    const response = await axios.get(`${API_URL}/lanches/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar o lanche com o ID ${id}: ${error.message}`);
  }
}

export async function createLanche(data) {
  try {
    const response = await axios.post(`${API_URL}/lanches`, data);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao criar o lanche: ${error.message}`);
  }
}

// Implemente outros métodos conforme necessário

export async function updateLanche(id, data) {
  try {
    const response = await axios.put(`${API_URL}/lanches/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao atualizar o lanche com o ID ${id}: ${error.message}`);
  }
}

export async function deleteLanche(id) {
  try {
    const response = await axios.delete(`${API_URL}/lanches/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao deletar o lanche com o ID ${id}: ${error.message}`);
  }
}