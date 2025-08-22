import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router";
import { WordsTable } from "../../components/words-table/WordsTable";

export const Words = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => navigate("/words/AddWords")}
        type="primary"
        icon={<PlusCircleOutlined />}
      >
        {" "}
        Добавить
      </Button>
      <WordsTable />
    </>
  );
};
