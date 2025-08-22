import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Button, Popconfirm } from "antd"
import { CategoryService } from "../../services/category/category.service"

export const DeleteCategory = ({ id }) => {
	const queryClient = useQueryClient()
	const { mutate: deleteCategory, isPending } = useMutation({
		mutationFn: CategoryService.delete,
		onSuccess: () => {
			queryClient.invalidateQueries(["category"])
		},
	})
	const onDelete = (id) => {
		deleteCategory({ id })
	}
	return (
		<Popconfirm
			title="Точно хотите удалить"
			description="Возварт данных невозможно"
			onConfirm={() => onDelete(id)}
			okText="Да"
			cancelText="Нет"
		>
			<Button loading={isPending} danger>
				Удалить
			</Button>
		</Popconfirm>
	)
}
