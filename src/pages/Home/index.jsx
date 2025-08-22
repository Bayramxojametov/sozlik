import { DeleteOutlined } from "@ant-design/icons"
import { Button, Table } from "antd"

const data = [
	{
		id: "1",
		name: "Mike",
		age: 32,
		address: "10 Downing Street",
	},
	{
		id: "2",
		name: "John",
		age: 42,
		address: "10 Downing Street",
	},
]

export const Home = () => {
	const columns = [
		{
			title: "Id-lar",
			dataIndex: "id",
			key: "id",
		},
		{
			title: "Adam atlari",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Jaslari",
			dataIndex: "age",
			key: "age",
			width: 70,
		},
		{
			title: "Ardesleri",
			dataIndex: "address",
			key: "address",
		},
		{
			title: "Actions",
			render: () => (
				<div>
					<Button icon={<DeleteOutlined />} danger />
				</div>
			),

		},
	]
	return (
		<>
			<Table dataSource={data} columns={columns} bordered />
		</>
	)
}
