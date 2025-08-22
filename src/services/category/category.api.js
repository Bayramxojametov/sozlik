import { useQuery } from "@tanstack/react-query";
import { CategoryService } from "./category.service";

export const useGetAllCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: () => CategoryService.getAll(),
    staleTime: Infinity,
  });
};
