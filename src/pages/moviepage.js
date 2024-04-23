import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import Movie from "../components/movie"
import { getMoviebyID } from "../utility/moviesApi";
import thumbnail from "../asset/thumbnail/thumbnail.jpg"

function MoviePage(){
    const [movie, setMovie]= useState([]);

    useEffect(() => {
        getMoviebyID(id).then(data =>{
        setTimeout(() => {
            setMovie(data)
        },500);
        })
    },[])

    let { id } =useParams();
    return <>
    <Movie img={thumbnail} movieTitle={movie.movieTitle} year={movie.releaseYear} genre={movie.genreViewModel} name={movie.directorViewModel} />
    </>
}
export default MoviePage