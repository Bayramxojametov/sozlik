import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import { useDeleteWord } from "../../services/words/words.api";

export const DeleteWord = ({ id }) => {
  const { mutate: deleteWord, isPending } = useDeleteWord();
  const onDelete = (id) => {
    deleteWord({ id });
  };
  return (
    <Popconfirm
      title="Точно хотите удалить"
      description="Возварт данных невозможно"
      onConfirm={() => onDelete(id)}
      okText="Да"
      cancelText="Нет"
    >
      <Button loading={isPending} icon={<DeleteOutlined />} danger />
    </Popconfirm>
  );
};
