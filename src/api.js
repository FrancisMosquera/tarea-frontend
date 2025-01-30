import axios from 'axios';

const API_URL = "http://localhost:5000/api"; // URL del backend

export const fetchData = async () => {
    try {
        const response = await axios.get(`${API_URL}/nombre-del-endpoint`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener datos:", error);
        return null;
    }
};
