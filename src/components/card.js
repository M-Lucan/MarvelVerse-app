import { StyledCard, StyledImg, StyledTitle, StyledreleaseYear } from "./cardStyle/cardStyle"


function Card({img, movieTitle, year}){
    console.log(year);
    console.log(img);
    return(
        <> 
        <StyledCard >
            <StyledImg src={img} />
            <StyledTitle>{movieTitle}</StyledTitle>
            <StyledreleaseYear>Release year: {year}</StyledreleaseYear>
        </StyledCard>
        </>
    )
}

export default Card;