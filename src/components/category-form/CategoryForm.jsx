import { useMutation, useQueryClient } from "@tanstack/react-query"
import { App, Button, Form, Input, Modal } from "antd"
import { CategoryService } from "../../services/category/category.service"

export const CategoryForm = ({ open, setOpen }) => {
	const [form] = Form.useForm()
	const { message } = App.useApp()
	const queryClient = useQueryClient()

	const { mutate: createCategory, isPending } = useMutation({
		mutationFn: CategoryService.create,
		onSuccess: () => {
			queryClient.invalidateQueries(["category"])
			message.success("Создан")
		},
	})
	
	function onFinish(values) {
		createCategory(values, {
			onSuccess: () => {
				form.resetFields()
				setOpen(false)
			},
		})
	}
	return (
		<Modal
			open={open}
			onCancel={() => setOpen(false)}
			footer={[
				<Button loading={isPending} onClick={form.submit} type="primary">
					Сохранить
				</Button>,
			]}
		>
			<Form form={form} onFinish={onFinish} name="category-form" layout="vertical">
				<Form.Item name="name_en" label="LATINSHA" rules={[{ required: true, max: 100, min: 3 }]}>
					<Input />
				</Form.Item>
				<Form.Item name="name_ru" label="КИРИЛШЕ" rules={[{ required: true, max: 100, min: 3 }]}>
					<Input />
				</Form.Item>
			</Form>
		</Modal>
	)
}
