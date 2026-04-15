import api from "@/utils/api";
import { CreateSnippet, UpdateSnippet } from "@/types/snippet";

export const getSnippets = async (q?: string, tag?: string) => {
    const res = await api.get("/snippets", {
        params: { q, tag },
    });
    return res.data;
};

export const getSnippet = async (id: string) => {
    const res = await api.get(`/snippets/${id}`);
    return res.data;
};

export const createSnippet = async (data: CreateSnippet) => {
    const res = await api.post("/snippets", data);
    return res.data;
};

export const updateSnippet = async (id: string, data: UpdateSnippet) => {
    const res = await api.patch(`/snippets/${id}`, data);
    return res.data;
};

export const deleteSnippet = async (id: string) => {
    const res = await api.delete(`/snippets/${id}`);
    return res.data;
};
