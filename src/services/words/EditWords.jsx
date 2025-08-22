import { useParams } from "react-router";
import { UpdateWordsForm } from "../../components/words-form/UpdateWordsForm";

export const EditWords = () => {
  const { id } = useParams();
  return (
    <>
      <UpdateWordsForm id={id} />
    </>
  );
};
