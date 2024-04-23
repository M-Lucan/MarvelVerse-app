export function getMovies(){
    return fetch("https://pm.chandraswork.com/api/Movies").then(data => data.json())
}

export function getMoviebyID(id){
    return fetch(`https://pm.chandraswork.com/api/movies/${id}`).then(data => data.json())
}