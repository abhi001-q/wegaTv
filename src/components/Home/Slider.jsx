import React, { useEffect } from 'react'
import globalApi from '../../services/globalApi';

function Slider() {

    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        globalApi.getTrendingVideos.then(resp=>{
            console.log(resp);
        })
    }
  return (
    <div>
      
    </div>
  )
}

export default Slider
