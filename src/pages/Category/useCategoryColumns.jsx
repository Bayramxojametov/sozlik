import { Space } from "antd"
import { DeleteCategory } from "./DeleteCategory"
import { EditCategory } from "./EditCategory"

export const useCategoryColumns = () => {
	const columns = [
		{
			title: "ID",
			dataIndex: "id",
			key: "id",
			width: 80,
		},
		{
			title: "LATINSHA",
			dataIndex: "name_en",
			key: "name_en",
		},
		{
			title: "КИРИЛШЕ",
			dataIndex: "name_ru",
			key: "name_ru",
		},
		{
			title: "Action",
			key: "action",
			width: 200,
			render: (record) => (
				<Space>
				
					<EditCategory record={record} />
					<DeleteCategory id={record.id} />
				</Space>
			),
		},
	]
	return columns
}
