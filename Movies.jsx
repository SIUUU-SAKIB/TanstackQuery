import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMovies = async (page, perPage) => {
  const start = (page - 1) * perPage;
  const end = start + perPage;

  const response = await axios.get(
    `http://localhost:3000/movies?_start=${start}&_end=${end}`
  );
  return response.data;
};

const Movies = () => {
  const [page, setPage] = useState(1);
  const perPage = 5;

  const { data } = useQuery({
    queryKey: ["movies", page],
    queryFn: () => fetchMovies(page, perPage),
    keepPreviousData:true
  });
  return (
    <div className="min-w-screen bg-slate-900 min-h-screen grid place-content-center text-white items-center justify-items-center ">
      <div className="flex flex-col items-start justify-center p-8 bg-slate-500 max-w-[600px]">
        {data?.map((movie) => (
          <p key={movie.id}>{movie.name}</p>
        ))}
      </div>
      <div className="flex  w-full">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
          className="p-2 border cursor-pointer w-full"
        >
          Previous
        </button>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={data?.length < perPage} // Disable if there are no more movies
          className="p-2 border cursor-pointer w-full"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Movies;
