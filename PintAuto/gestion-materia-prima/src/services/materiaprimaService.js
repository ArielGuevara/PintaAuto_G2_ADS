import { act } from "react";
import api from "./api";

const materiaprimaService = {
    obtenerTodas: async () => {
        const response = await api.get('/materiaprima');
        return response.data;
    },
    
    obtenerporId: async (id) => {
        const response = await api.get(`/materiaprima/${id}`);
        return response.data;
    },

    crear: async (materiaprima) => {
        const response = await api.post('/materiaprima', materiaprima);
        return response.data;
    },

    actualizar: async (id, materiaprima) => {
        const response = await api.put(`/materiaprima/${id}`, materiaprima);
        return response.data;
    },

    eliminar: async (id) => {
        const response = await api.delete(`/materiaprima/${id}`);
        return response.data;
    }
};