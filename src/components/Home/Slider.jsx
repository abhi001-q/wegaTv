import React, { useEffect } from 'react'
import globalApi from '../../services/globalApi';

function Slider() {
    const [movieList,setmovieList]=useState([]);
    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        globalApi.getTrendingVideos.then(resp=>{
            setmovieList(resp.data.results);
        })
    }
  return (
    <div>
      
    </div>
  )
}

export default Slider
