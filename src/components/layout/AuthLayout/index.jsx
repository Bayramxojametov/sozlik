import { Outlet } from "react-router"

export const AuthLayout = () => {
	return (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				background: "#f5f5f5",
			}}
		>
			<Outlet />
		</div>
	)
}
