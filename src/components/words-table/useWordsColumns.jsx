import { Button, Space } from "antd";
import { DeleteWord } from "./DeleteWord";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

export const useWordsColumns = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Соз",
      dataIndex: "word_ru",
      key: "word_ru",
    },
    {
      title: "Маниси",
      dataIndex: "descriptions_ru",
      key: "descriptions_ru",
    },
    {
      title: "Action",
      key: "action",
      width: 200,
      render: (record) => (
        <Space>
          <Button
            onClick={() => navigate(`/words/editwords/${record.id}`)}
            icon={<EditOutlined />}
          />
          <DeleteWord id={record.id} />
        </Space>
      ),
    },
  ];

  return columns;
};
