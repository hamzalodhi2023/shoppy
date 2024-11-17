import axios from "axios";

axios.defaults.withCredentials = true;
const api = axios.create({
    baseURL: "http://localhost:8080",
    // baseURL: "http://localhost:8080/api",
});

export const CreateUser = async (signUpData) => {
    console.log(signUpData)
    try {
        const res = await api.post("/users/create", { ...signUpData });
        return res.data;
    } catch (error) {
        console.log("Error creating user:", error);
        throw error;
    }
};