import { useEffect, useState } from "react"
import Card from "../components/card"
import {Link} from "react-router-dom"
import { getMovies } from "../utility/moviesApi";
import thumbnail from "../asset/thumbnail/thumbnail.jpg"
import "./homepage.css"
import "../index.css"

function HomePage(){{
const [movies, setMovies]= useState([]);

useEffect(() => {
    getMovies().then(data =>{
        setMovies(data)
        console.log(data);
    })
},[])

return <>
<h1>Select Marvel movie</h1>
<div className="wrap">
<div className="grid">
    {movies.map((movie) => 
    <Link to={`/${movie.movieID}`}> <Card key={movie.movieID} movieTitle={movie.movieTitle} img={thumbnail} year={movie.releaseYear}/></Link>
)}
</div>
</div>

</>
};}

export default HomePage