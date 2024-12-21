import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/products",
});

export const GetAllProducts = async () => {
    try {
        const res = await api.get("/read");
        return res.data.data;
    } catch (error) {
        throw error;
    }
};