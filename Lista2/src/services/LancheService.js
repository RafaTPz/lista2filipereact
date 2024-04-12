import axiosInstance from "../utils/axios";

const getLancheById = async (id) => {
    const res = await axiosInstance.get('/lanches/' + id)
    return res.data;
}

const getAllLanches = async () => {
    const res = await axiosInstance.get('/lanches');
    return res.data;
}

export default {
    getLancheById,
    getAllLanches
}
