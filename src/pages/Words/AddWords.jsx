import { Button } from "antd";
import { WordsForm } from "../../components/words-form/WordsForm";
import { PlusOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router";

export const AddWords = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate("/words")}> назад </Button>
      <WordsForm />
    </>
  );
};
