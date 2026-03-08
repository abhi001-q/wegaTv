import React, { useEffect, useState } from "react";
import globalApi from "../../services/globalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Slider() {
  const [movieList, setmovieList] = useState([]);
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    globalApi.getTrendingVideos.then((resp) => {
      setmovieList(resp.data.results);
    });
  };
  return (
    <div>
      <HiChevronLeft className=" hidden md:block text-white text-[30px] absolute mx-8 mt-37.5 cursor-pointer  " />
      <HiChevronRight className=" hidden md:block text-white text-[30px] absolute mx-8 mt-37.5 cursor-pointer  right-0" />

      <div className="flex overflow-x-auto w-full px-16 py-4 mb-10 scrollbar-hide">
        {movieList.map((item) => (
          <img
            key={item.id}
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt=""
            className="min-w-full h-80 object-cover  object-top mr-5 rounded-md "
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
