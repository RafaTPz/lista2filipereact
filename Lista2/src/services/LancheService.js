import axiosInstance from "../utils/axios";

const getLancheById = async (id) => {
    const res = await axiosInstance.get('/lanches/' + id);
    return res.data;
}

const getAllLanches = async () => {
    const res = await axiosInstance.get('/lanches');
    return res.data;
}

const createLanche = async (lancheData) => {
    const res = await axiosInstance.post('/lanches', lancheData);
    return res.data;
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
