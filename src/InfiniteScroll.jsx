import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
const fetchMovies = () => {
   return axios.get(`http://localhost:3000/movies`);
  
};
const InfiniteScroll = () => {
  const { data, isLoading, isError, error, isFetching, refetch } = useInfiniteQuery({
    queryKey: [`movies`],
    queryFn: () => fetchMovies()
  });

  return (
    <div className="min-h-screen min-w-screen bg-slate-900">
    
     {
        data?.data.map(e => <p className="text-white font-semibold px-8 shadow-lg bg-slate-900 py-2 my-1" key={e.id}>{e.name}</p>)
     }
    </div>
  );
};

export default InfiniteScroll;
