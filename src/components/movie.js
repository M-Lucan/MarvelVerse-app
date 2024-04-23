import { Styledtext, Styledwrap, StyledMovie, StyledImg, StyledTitle, StyledreleaseYear, Styledgenre, Styleddirector, StyledgenreWrap, StyledLink } from "./movieStyle/movieStyle"
import {Link} from "react-router-dom"

function Movie({img, movieTitle, year, genre, name }){
    return(
        <>
    <Styledwrap>
    <StyledMovie>
        <StyledImg src={img} />
        <StyledTitle>{movieTitle}</StyledTitle>
        <Styledtext>Release year:</Styledtext>
        <StyledreleaseYear>{year}</StyledreleaseYear>
        <Styledtext>Genre: </Styledtext>
    <StyledgenreWrap> 
        {genre === undefined ? <></> : genre.map( g=>
            <StyledgenreWrap>{g.genre} </StyledgenreWrap>)}
    </StyledgenreWrap> 
    <Styledtext>Director: </Styledtext>
    <StyledgenreWrap> 
        {name === undefined ? <></> : name.map( m=> 
            <Styleddirector>{m.name}</Styleddirector>)}
    </StyledgenreWrap> 
    </StyledMovie>
    <StyledLink><Link to={"/"}>Click here for movie selection</Link></StyledLink>
    </Styledwrap>
        </>
    )
}

export default Movie;