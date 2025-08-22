import { useMutation, useQueryClient } from "@tanstack/react-query"
import { App, Button, Form, Input, Modal } from "antd"
import { CategoryService } from "../../services/category/category.service"
import { useFormStore } from "../../store/useFormStore"
import { useEffect } from "react"

export const CategoryUpdateForm = () => {
	const { isOpenForm, formData, resetFormData, toggleForm } = useFormStore()
	const [form] = Form.useForm()
	const { message } = App.useApp()
	const queryClient = useQueryClient()

	const { mutate: updateCategory, isPending } = useMutation({
		mutationFn: CategoryService.update,
		onSuccess: () => {
			queryClient.invalidateQueries(["category"])
			message.success("Изменен")
		},
	})
	useEffect(() => {
		if (formData) {
			form.setFieldsValue({
				name_en: formData.name_en,
				name_ru: formData.name_ru,
			})
		}
	}, [formData])

	function onFinish(values) {
		if (formData) {
			updateCategory(
				{
					id: formData.id,
					...values
				},
				{
					onSuccess: () => {
						form.resetFields()
						resetFormData()
					},
				}
			)
		}
	}
	return (
		<Modal
			open={isOpenForm}
			onCancel={toggleForm}
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
