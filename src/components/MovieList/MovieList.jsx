import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import MovieDetails from '../MoveDetails/MovieDetails';

function MovieList() {
    const history = useHistory();

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

const details = (movieId) => {

    dispatch({
        type: 'FETCH_DETAILS',
        payload: movieId
    })
    history.push('/details/' + id);
}

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <button onClick={ () => {
                                details(movie.id)  
                            }}><img src={movie.poster} alt={movie.title}/></button>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;