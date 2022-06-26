import { useSelector } from "react-redux";


function MovieDetails(){
    
    const movieDetails = useSelector(store => store.details)
    
    return (
        <>
        <h1> Details </h1>
        <h3>
            {movieDetails[0].title}
        </h3>

        </>
    )

}

export default MovieDetails;





