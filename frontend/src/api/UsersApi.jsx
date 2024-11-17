import axios from "axios";

const api = axios.create({
    baseURL: "http://localshost:8080/users",
    // baseURL: "http://localhost:8080/api",
});
