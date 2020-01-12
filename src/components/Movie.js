import React from 'react';
import { useMovieFetch } from './hooks/useMovieFetch';

import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Actor from './elements/Actor';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';

const Movie = ({ movieId }) => {
    const [movie, loading, error] = useMovieFetch(movieId);
    console.log(movie);

    return (
        <>
            <Navigation />
            <MovieInfo />
            <MovieInfoBar />
            <Grid>
                <Actor />
            </Grid>
            <Spinner />
        </>
    )
}

export default Movie;