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
        if (res.status === 201) {
            return res.data;
        } else {
            throw new Error("Failed to update post");
        }
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};