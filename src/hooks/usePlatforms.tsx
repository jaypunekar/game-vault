import platforms from "../data/platforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: platforms, isLoading: false });

export default usePlatforms;
