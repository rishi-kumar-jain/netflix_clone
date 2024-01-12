import React, {useState, useEffect} from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {

const [movies, setMovies] = useState([]);
const [trailerUrl, setTrailerUrl] = useState("");

//A snippet of code which runs based on a specific condition/variable
//hooks
//if  [], run once when the row loads, and don't run again
//if [anyVariable] run whenever the variable changes.

useEffect(() =>{
async function fetchData(){
    const request = await axios.get(fetchURL);
    setMovies(request.data.results);
    //  console.log(request.data.results);
    return request;
   }    
   
   fetchData(); // this function will run only once bcoz of [] 

} ,[fetchURL]); //<- this [fetchURL] will tell the useEffect that u are using this variable fetchURL which is outside the block.So as the fetchURL value changes then it will reload;

// console.log(movies);
// console.table(movies)


const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const handleClick = (movie) => {
      if(trailerUrl){
        setTrailerUrl("");
        // if trailer is already playing
      }
      else{
        //with the help of movieTrailer u can find out the movie trailr from u tube
        movieTrailer(movie?.name || "")
          .then((url)=>{
            // https://www.youtube.com/watch?v=XtMThy8QKqU&t=8183s&ab_channel=CleverProgrammer
            // ? ke bad => new URl(url).search
            // in order to move deeper => new URLSearchParams(new URL(url).search) allows us to do get
            // to get v  => urlParams.get('v')

            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((error)=>console.log(error));
      }
}


  

  return (
    <div className='row'>

    {/* title */}
    <h2>{title}</h2>

    <div className="row__posters">
    {/* several row poster(s)*/}


    {movies.map(movie =>(
        <img
        //  key will provide uniqueness so that instead of rerendering all components only that particular component will be rerendered.
          key={movie.id}
          onClick={()=>handleClick(movie)}
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          src={`${base_url}${
          isLargeRow ? movie.poster_path :  movie.backdrop_path
            }`}
            alt={movie.name} />
    ))}

    </div>
    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

    </div>
  );
}

export default Row;