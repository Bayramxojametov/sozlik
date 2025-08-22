import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { WordsCategoryFormItem } from "./WordsCategoryFormItem";
import { useCreateWord } from "../../services/words/words.api";
import { useNavigate } from "react-router";

export const WordsForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const { mutate: createWord, isPending: isCreating } = useCreateWord();

  function onFinish(values) {
    const formData = new FormData();

    formData.append("word_en", values.word_en);
    formData.append("word_ru", values.word_ru);
    formData.append("category_id", values.category_id);

    // Текстовые описания
    formData.append("descriptions_en", values.descriptions_en);
    formData.append("descriptions_ru", values.descriptions_ru);

    // Массивы — сериализуем в JSON
    formData.append("synonym_ids", JSON.stringify(values.synonym_ids ?? []));
    formData.append("antonym_ids", JSON.stringify(values.antonym_ids ?? []));
    formData.append(
      "example_ids_ru",
      JSON.stringify(values.example_ids_ru ?? [])
    );
    formData.append(
      "example_ids_en",
      JSON.stringify(values.example_ids_en ?? [])
    );

    // Затем отправляем FormData
    createWord(formData, {
      onSuccess: () => {
        navigate("/words");
      },
    });
  }

  return (
    <Form form={form} onFinish={onFinish} layout="vertical" name="add-word">
      <Form.Item
        name={"word_ru"}
        label={"Соз ru"}
        rules={[{ required: true, min: 1, max: 100 }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={"word_en"}
        label={"Соз en"}
        rules={[{ required: true, min: 1, max: 100 }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={"descriptions_ru"}
        label={"Тусиндирме ru"}
        rules={[{ required: true, min: 1, max: 1000 }]}
      >
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item
        name={"descriptions_en"}
        label={"Тусиндирме en"}
        rules={[{ required: true, min: 1, max: 1000 }]}
      >
        <TextArea rows={4} />
      </Form.Item>
      <WordsCategoryFormItem />
      {/* <Form.Item name={"category_id"} label={"Категория"} required>
        <Select options={categoryOptions}/>
      </Form.Item> */}
      <Form.Item name={"synonym_ids"} label={"Синонимы"}>
        <Select mode="multiple" options={[]} />
      </Form.Item>
      <Form.Item name={"antonym_ids"} label={"Антонимы"}>
        <Select mode="multiple" options={[]} />
      </Form.Item>
      <Form.Item name={"example_ids_ru"} label={"Мысаллар ru"}>
        <Select mode="tags" options={[]} />
      </Form.Item>
      <Form.Item name={"example_ids_en"} label={"Мысаллар en"}>
        <Select mode="tags" options={[]} />
      </Form.Item>
      <Form.Item label={null}>
        <Button loading={isCreating} htmlType="submit" type="primary">
          Добавить
        </Button>
      </Form.Item>
    </Form>
  );
};
