import { Button } from "antd";
import { useNavigate } from "react-router";
import { WordsForm } from "../../components/words-form/WordsForm";

export const AddWords = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate("/words")}> назад </Button>
      <WordsForm />
    </>
  );
};
