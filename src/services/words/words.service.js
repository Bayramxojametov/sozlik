import { $authHost } from "../../api";

export const WordsService = {
  getAll: async (params) => {
    const res = await $authHost.get("/words", { params });
    return res.data;
  },
  getById: async (id) => {
    const res = await $authHost.get(`/words/${id}`);
    return res.data;
  },
  create: async (formData) => {
    const res = await $authHost.post("/words", formData);
    return res.data;
  },
  update: async ({ id, formData }) => {
    const res = await $authHost.put(`/words/${id}`, formData);
    return res.data;
  },
  delete: async ({ id }) => {
    const res = await $authHost.delete(`/words/${id}`);
    return res.data;
  },
};
