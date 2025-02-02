import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "./Spinner";

const FetchRq = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => axios.get(`https://jsonplaceholder.typicode.com/posts`),
    refetchInterval: false,
    refetchIntervalInBackground: true,
    // staleTime:3000
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
    <div>
      <ul className="pt-8 w-full bg-slate-900 flex flex-col items-center mx-auto gap-4">
        <h1 className="text-white font-bold text-2xl mb-2">
          🔥🔥🔥 Tanstack Query 🔥🔥🔥
        </h1>
        {data.data.map((e) => (
          <li
            key={e.id}
            className="max-w-[600px] shadow-md px-12 py-8 bg-slate-800 text-white flex flex-col gap-4"
          >
            <p className="font-semibold text-xl underline">{e.title}</p>
            <p className="text-lg">{e.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchRq;
