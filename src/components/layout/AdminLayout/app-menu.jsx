import { Menu } from "antd"
import { useMenuData } from "./useMenuData"
import { useLocation, useNavigate } from "react-router"

export const AppMenu = () => {
	const items = useMenuData()
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<Menu
			theme="dark"
			selectedKeys={[location.pathname]}
			onSelect={(item) => navigate(item.key)}
			defaultSelectedKeys={["/"]}
			mode="inline"
			items={items}
		/>
	)
}
