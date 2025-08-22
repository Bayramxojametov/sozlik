import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useAuthStore = create(
	persist(
		(set) => ({
			user: null,
			setUser: (data) => {
				set({ user: data.data })
				window.localStorage.setItem("token", data.data.token)
			},
			logout: () => {
				set({ user: null })
				window.localStorage.removeItem("token")
			},
		}),
		{ name: "auth" }
	)
)
