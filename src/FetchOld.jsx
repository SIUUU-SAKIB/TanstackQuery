import { useEffect, useState } from "react";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_BASE_URL;
const FetchOld = () => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
   const data = axios.get(`${API_BASE_URL}posts`).then(res =>setposts(res.data))
  }, []);

  return (
    <div>
      <ul className=" pt-8 classname='w-full bg-slate-900 flex flex-col items-center mx-auto gap-4">
        {posts?.map((e) => (
          <li
            key={e.id}
            className="max-w-[600px] shadow-md px-16 py-12 bg-slate-800 text-white flex flex-col gap-4"
          >
            <p className="font-semibold text-xl">{e.title}</p>
            <p className="text-lg">{e.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchOld;
