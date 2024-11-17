import axios from "axios";

const api = axios.create({
    baseURL: "http://localshost:8080/users",
    // baseURL: "http://localhost:8080/api",
});

export const CreateUser = async (user) => {
    try {
        const response = await api.post("/create", user);
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};