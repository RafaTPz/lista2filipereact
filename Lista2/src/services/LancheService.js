import axiosInstance from "../utils/axios";

const getLancheById = async (id) => {
    const res = await axiosInstance.get('/lanches/' + id);
    return res.data;
}

const getAllLanches = async () => {
    const res = await axiosInstance.get('/lanches');
    return res.data;
}

const createLanche = async (newLancheData) => {
    try {
        const allLanches = await getAllLanches();
        const lastLanche = allLanches[allLanches.length - 1];
        const nextId = lastLanche ? parseInt(lastLanche.id) + 1 : 1;

        const res = await axiosInstance.post('/lanches', { id: String(nextId), ...newLancheData });
        return res.data;
    } catch (error) {
        throw new Error('Erro ao criar lanche: ' + error.message);
    }
}

const updateLancheById = async (id, updatedLancheData) => {
    const res = await axiosInstance.put(`/lanches/${id}`, updatedLancheData);
    return res.data;
}

const deleteLancheById = async (id) => {
    const res = await axiosInstance.delete(`/lanches/${id}`);
    return res.data;
}

export default {
    getLancheById,
    getAllLanches,
    createLanche,
    updateLancheById,
    deleteLancheById
}
