import { $authHost, $host } from "../../api"

export const AuthService = {
	login: async ({ phone, password }) => {
		const res = await $host.post("/login", { phone, password })
		return res.data
	},
	getProfile: async () => {
		const res = await $authHost.get("/profile")
		return res.data
	},
}
