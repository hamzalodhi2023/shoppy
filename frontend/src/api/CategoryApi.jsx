import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/dropdowns",
});

export const GetAllCategories = async () => {
    try {
        const res = await api.get("/read?name=Categories");
        return res.data.data;
    } catch (error) {
        throw error;
    }
};