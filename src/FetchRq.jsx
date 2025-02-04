import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

// ✅ Fix: Use `VITE_BASE_URL`
const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const FetchRq = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: () => axios.get(`${API_BASE_URL}posts`),
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.error(error);
    return (
      <h1 className="text-[200px] font-bold text-red-500">
        Page is getting Error .....
      </h1>
    );
  }

  if (!data || !data.data) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex flex-col">
      <ul className="pt-8 w-full bg-slate-900 flex flex-col items-center mx-auto gap-4">
        <h1 className="text-white font-bold text-2xl mb-2">
          🔥🔥🔥 Tanstack Query 🔥🔥🔥
        </h1>

        {data?.data?.map((e) => (
          <li
            key={e.id}
            className="max-w-[600px] shadow-md px-12 py-8 bg-slate-800 text-white flex flex-col gap-4"
          >
            <p className="font-semibold text-xl underline">{e.title}</p>
            <p className="text-lg">{e.body}</p>
            <Link
              to={`/details/${e.id}`}
              className="text-xl py-4 bg-purple-500 text-white px-8 cursor-pointer text-center"
              onClick={refetch}
            >
              See Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchRq;
