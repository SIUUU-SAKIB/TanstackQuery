import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { FetchData } from "./Api";
import Spinner from "./Spinner";

const Details = () => {
  const id = useParams().id;

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () =>  FetchData(id)
  });

  if (isLoading) return <Spinner />;
  if (error)
    return <p className="text-red-500 text-center">Error loading data.</p>;

  return (
    <div className="flex flex-col items-center pt-8 bg-slate-900 min-h-screen">
      <h1 className="text-white font-bold text-2xl mb-4">
        🔥🔥🔥 Tanstack Query 🔥🔥🔥
      </h1>

      {data && (
        <div
          key={data.id}
          className="max-w-[600px] shadow-md px-12 py-8 bg-slate-800 text-white flex flex-col gap-4"
        >
          <p className="font-semibold text-xl underline">{data.title}</p>
          <p className="text-lg">{data.body}</p>
          <Link
            to="/rq"
            className="text-xl py-4 bg-purple-500 text-white rounded px-8 cursor-pointer text-center"
          >
            Back
          </Link>
        </div>
      )}
    </div>
  );
};

export default Details;
