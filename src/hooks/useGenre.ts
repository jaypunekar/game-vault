import axios from "axios";
import genres from "../data/genres";
import { useQuery } from "react-query";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const useGenre = () => {
  return useQuery({
    queryKey: "genres",
    queryFn: () =>
      axios
        .get("https://api.rawg.io/api/", {
          params: {
            key: "99e1733bb6bf4a31a8d60fa4d00c7413",
          },
        })
        .then((res) => res.data),
  });
};

// const useGenre = () => ({ data: genres, isLoading: false, error: null });

export default useGenre;
