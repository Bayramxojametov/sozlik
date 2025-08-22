import { $authHost } from "../../api"

export const CategoryService = {
	getAll: async () => {
		const res = await $authHost.get("/category")
		return res.data
	},
	getById: async (id) => {
		const res = await $authHost.get(`/category/${id}`)
		return res.data
	},
	create: async ({ name_en, name_ru }) => {
		const res = await $authHost.post("/category", { name_en, name_ru })
		return res.data
	},
	update: async ({ id, name_en, name_ru }) => {
		const res = await $authHost.put(`/category/${id}`, { name_en, name_ru })
		return res.data
	},
	delete: async ({ id }) => {
		const res = await $authHost.delete(`/category/${id}`)
		return res.data
	},
}

/* 
export const CategoryService = {
	getAll: async () => {
		const res = await $authHost.get("/category")
		return res.data
	},
	getById: async (id) => {
		const res = await $authHost.get(`/category/${id}`)
		return res.data
	},
	create: async ({ name_en, name_ru }) => {
		const res = await $authHost.post("/category", { name_en, name_ru })
		return res.data
	},
	update: async ({ id, name_en, name_ru }) => {
		const res = await $authHost.put(`/category/${id}`, { name_en, name_ru })
		return res.data
	},
	delete: async (id) => {
		const res = await $authHost.delete(`/category/${id}`)
		return res.data
	},
}
 */
