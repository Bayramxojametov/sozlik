import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { AuthService } from "../services/auth/auth.service"
import { useAuthStore } from "../store/useAuthStore"

export const useCheckMe = () => {
	const navigate = useNavigate()
	const { logout } = useAuthStore()
	const {  isError } = useQuery({
		queryKey: ["checkMe"],
		queryFn: async () => {
			const res = await AuthService.getProfile()
			return res.data
		},
	})
	useEffect(() => {
		if (isError) {
			navigate("/auth", { replace: true })
			logout()
		}
	}, [isError])
}
