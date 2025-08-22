import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { WordsService } from "./words.service";
import { useMessage } from "../../hooks/useMessage";
import { message } from "antd";

export const useGetAllWords = (params = {}) => {
  return useQuery({
    queryKey: ["words", ...Object.values(params)],
    queryFn: () => WordsService.getAll(params),
  });
};

export const useGetByIdWord = (id) => {
  return useQuery({
    queryKey: ["Word get by id", id],
    queryFn: () => WordsService.getById(id),
    enabled: !!id,
  });
};

export const useCreateWord = () => {
  const queryClient = useQueryClient();
  const { message } = useMessage();
  return useMutation({
    mutationFn: WordsService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["words"] });
      message.success({
        message: "created",
      });
    },
  });
};

onError: (error) => {
  message.error({
    message: "Ошибка",
    description: JSON.stringify(error?.response?.data?.errors ?? []),
  });
};

export const useUpdateWord = () => {
  const queryClient = useQueryClient();
  const { message } = useMessage();
  return useMutation({
    mutationFn: WordsService.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["words"] });
      message.success({
        message: "Updated",
      });
    },
  });
};

export const useDeleteWord = () => {
  const queryClient = useQueryClient();
  const { message } = useMessage();
  return useMutation({
    mutationFn: WordsService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["words"] });
      message.success({
        message: "Deleted",
      });
    },
    onError: (error) => {
      message.error({
        message: "Ошибка",
        description: JSON.stringify(error?.response?.data?.errors ?? []),
      });
    },
  });
};
