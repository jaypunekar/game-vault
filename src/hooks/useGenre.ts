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
      axios
        .get<FetchResponse<Genre>>(
          "https://api.rawg.io/api/genres?key=99e1733bb6bf4a31a8d60fa4d00c7413"
        )
        .then((res) => res.data),
  });
};

// const useGenre = () => ({ data: genres, isLoading: false, error: null });

export default useGenre;
