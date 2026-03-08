import axios from "axios";

const movieBaseUrl = 'https://api.themoviedb.org/3';
const api_key='4e3a5de81dd6769c1788b1d584fa91f2'

const getTrendingVideos=axios.get(this.movieBaseUrl+
    "/trending/all/day?api_key"+api_key);


export default {
    getTrendingVideos }