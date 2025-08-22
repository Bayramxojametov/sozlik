import { EditOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { useFormStore } from "../../store/useFormStore"

export const EditCategory = ({ record }) => {
	const { setFormData } = useFormStore()

	return <Button onClick={() => setFormData(record)} icon={<EditOutlined />} />
}
