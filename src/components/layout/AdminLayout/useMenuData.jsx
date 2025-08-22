import { BarChartOutlined, HomeOutlined, OrderedListOutlined } from "@ant-design/icons"

export const useMenuData = () => {
	const items = [
		{
			key: "/",
			icon: <HomeOutlined />,
			label: "Главная",
		},
		{
			key: "/category",
			icon: <BarChartOutlined />,
			label: "Категорий",
		},
		{
			key: "/words",
			icon: <OrderedListOutlined />,
			label: "Список слов",
		},
	]
	return items
}
