import { useQuery } from "@tanstack/react-query"
import { Button, Table } from "antd"
import { useState } from "react"
import { CategoryForm } from "../../components/category-form/CategoryForm"
import { CategoryService } from "../../services/category/category.service"
import { useCategoryColumns } from "./useCategoryColumns"
import { CategoryUpdateForm } from "../../components/category-form/CategoryUpdateForm"

export const Category = () => {
	const [open, setOpen] = useState(false)

	const { data, isLoading } = useQuery({
		queryKey: ["category"],
		queryFn: () => CategoryService.getAll(),
	})

	const columns = useCategoryColumns()

	return (
		<>
			<div>
				<Button onClick={() => setOpen(!open)} type="primary">
					Добавить
				</Button>
			</div>
			<Table
				rowKey={(record) => record.id}
				loading={isLoading}
				dataSource={data?.data || []}
				columns={columns}
				bordered
			/>
			<CategoryForm open={open} setOpen={setOpen} />
			<CategoryUpdateForm />
		</>
	)
}
