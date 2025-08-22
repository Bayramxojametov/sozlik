import { LogoutOutlined } from "@ant-design/icons"
import { Button, Layout, theme } from "antd"
import { useState } from "react"
import { Outlet } from "react-router"
import { useAuth } from "../../../hooks/useAuth"
import { AppMenu } from "./app-menu"

const { Header, Content, Footer, Sider } = Layout

export const AdminLayout = () => {
	// 	const { user, logout } = useAuthStore()
	// const navigate = useNavigate()
	// useEffect(() => {
	// 	if (!user) {
	// 		navigate("/auth", { replace: true })
	// 	}
	// }, [user])
    
	const { logout } = useAuth()
	const [collapsed, setCollapsed] = useState(false)
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken()
	return (
		<>
			<Layout style={{ minHeight: "100vh" }}>
				<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
					<AppMenu />
				</Sider>
				<Layout>
					<Header
						style={{
							padding: 5,
							background: "#fefefe",
							display: "flex",
							alignItems: "center",
							justifyContent: "flex-end",
						}}
					>
						<Button onClick={logout} danger icon={<LogoutOutlined />} />
					</Header>
					<Content style={{ padding: 24 }}>
						<div
							style={{
								padding: 24,
								minHeight: "100%",
								background: colorBgContainer,
								borderRadius: borderRadiusLG,
							}}
						>
							<Outlet />
						</div>
					</Content>
				</Layout>
			</Layout>
		</>
	)
}
