import { useGetAllCategory } from "../../services/category/category.api";
import { Form, Select } from "antd";

export const WordsCategoryFormItem = () => {
  const { data } = useGetAllCategory();
  const categoryOptions =
    data?.data.map((item) => ({ value: item.id, label: item.name_ru })) || [];
  return (
    <Form.Item name={"category_id"} label={"Категория"} required>
      <Select options={categoryOptions} />
    </Form.Item>
  );
};
