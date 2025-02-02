import { useEffect, useState } from "react";
import { fetchPosts } from "./Api";


const FetchOld = () => {
   const [posts, setposts] = useState([])
   const  getPostData = async ()=>{
    try{
      const res = await fetchPosts()
      setposts(res.data)
    }catch{
        alert(`danger`)
    }
   }
   useEffect(() => {
    getPostData()
   },[])
console.log(posts)
   return(
<div>
    <ul className=" pt-8 classname='w-full bg-slate-900 flex flex-col items-center mx-auto gap-4">
        {
            posts.map(e => <li key={e.id} className="max-w-[600px] shadow-md px-16 py-12 bg-slate-800 text-white flex flex-col gap-4">
                <p className="font-semibold text-xl">{e.title}</p>
                <p className="text-lg">{e.body}</p>
            </li>)
        }
    </ul>
</div>
   )
};

export default FetchOld;