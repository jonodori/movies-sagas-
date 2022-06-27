import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetails(){
    const history = useHistory();

    //grabs the data from the store
    const movieDetails = useSelector(store => store.details)
    
    const backToList = () => {
        history.push('/')
    }

    return (
        <>
        <h1> Details </h1>
        <h3>     
        {/* default state is undefined, need to do conditional rendering     */}
        {movieDetails[0] && movieDetails[0].title}
        <p>
        <img src = {movieDetails[0] && movieDetails[0].poster} />
        </p>
        <p>
        {movieDetails[0] && movieDetails[0].description}
        </p>
        </h3>

        <button onClick={backToList}>Back to List</button>

        </>
    )

}

export default MovieDetails;





