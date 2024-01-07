import axios from "axios";
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const useGenre = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // This is 24 hrs
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenre;
