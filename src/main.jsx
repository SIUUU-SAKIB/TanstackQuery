import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import FetchOld from "./FetchOld.jsx";
import FetchRq from "./FetchRq.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Details from "./Details.jsx";
import Movies from "../Movies.jsx";
import InfiniteScroll from "./InfiniteScroll.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="trad" element={<FetchOld />} />
            <Route path="rq" element={<FetchRq />} />
            <Route path="details/:id" element={<Details/>}/>
            <Route path="movies" element={<Movies/>}
            />
            <Route path="scroll" element={<InfiniteScroll/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* ReactQueryDevtools outside Routes */}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </StrictMode>
);
