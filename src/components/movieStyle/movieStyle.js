import styled from "styled-components"

export const Styledwrap = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;`
    
export const StyledMovie = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:  500px;
    height: 700px;
    background-color: black;
    color: white;
    border-radius: 50px;
    border: 8px groove grey;`

export const StyledImg = styled.img`
    height: 220px;
    width: 150px;`

export const StyledTitle = styled.p`
    height: 40px;
    background-color: black;
    color: white;
    font-size: 30pt;
    text-align: center;`

export const StyledreleaseYear = styled.p`
    color: white;
    margin-top: 5px;
    font-size: 20pt;
    height: 5px;`

export const Styledgenre = styled.p`
    color: white;
    font-size: 10pt;`

export const Styleddirector = styled.p`
    color: white;
    font-size: 20pt;
    margin-right: 10px;`

export const Styledtext = styled.p`
    height: 10px;
    font-size: 20pt;
    color: grey;
    margin-bottom: 40px;`

export const StyledgenreWrap = styled.div`
    display: flex;
    flex-direction: row;
    height: 10px;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    margin-left: 5px;
    font-size: 15pt;`

export const StyledLink = styled.div`
    & a{color: white;}
    color:white`