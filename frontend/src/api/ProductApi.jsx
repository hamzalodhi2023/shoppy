import axios from "axios";

axios.defaults.withCredentials = true;
const api = axios.create({
    baseURL: "http://localhost:8080/products",
});

export const GetAllProducts = async () => {
    try {
        const res = await api.post("/read");
        return res.data;
    } catch (error) {
        throw error;
    }
};