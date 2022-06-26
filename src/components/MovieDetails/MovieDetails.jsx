import { useSelector } from "react-redux";


function MovieDetails(){
    
    const movieDetails = useSelector(store => store.details)
    
    return (
        <>
        <h1> Details </h1>
        <h3>
        {movieDetails[0] && movieDetails[0].title}
        <p>
        <img src = {movieDetails[0] && movieDetails[0].poster} />
        </p>
        <p>
        {movieDetails[0] && movieDetails[0].description}
        </p>
        </h3>

        </>
    )

}

export default MovieDetails;





