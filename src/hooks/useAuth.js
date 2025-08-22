import { useNavigate } from "react-router"
import { useAuthStore } from "../store/useAuthStore"
import { useEffect } from "react"

export const useAuth = () => {
	const { user, logout } = useAuthStore()
	const navigate = useNavigate()
	useEffect(() => {
		if (!user) {
			navigate("/auth", { replace: true })
		}
	}, [user])
    
	return { logout }
}
