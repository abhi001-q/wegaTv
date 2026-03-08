import React, { useEffect, useState } from "react";
import globalApi from "../../services/globalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
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
    <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none ">
      {movieList.map((item) => (
        <img
          key={item.id}
          src={IMAGE_BASE_URL + item.backdrop_path}
          alt=""
          className="min-w-full h-77.5 object-cover object-left-top mr-5 rounded-md "
        />
      ))}
    </div>
  );
}

export default Slider;
