import axios from "axios";

axios.defaults.withCredentials = true;
const api = axios.create({
    baseURL: "http://localhost:8080/users",
});

export const CreateUser = async (signUpData) => {
    try {
        const res = await api.post("/create", signUpData);
        return res.data;
    } catch (error) {
        throw error;
    }
};