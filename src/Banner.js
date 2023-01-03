import React, { useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";
const Banner = () => {
  const [movie, setMovie] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request,'fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}& with_network=213`,')
      setMovie(request.data.results[Math.floor(Math.random()* request.data.results.length - 1)])
    }
    fetchData();
  },[]);
  console.log(movie);
  return (
    <header>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center"
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">{movie?.overview}</h1>
        </div>
        <div className="banner--fadeBottom"></div>
      </div>
    </header>
  );
};

export default Banner;
