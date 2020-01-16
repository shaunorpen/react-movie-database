import React from 'react';
import { Link } from '@reach/router';

import { StyledMovieThumb } from '../styles/StyledMovieThumb';

const MovieThumb = ({ image, movieId, clickable, movieName }) => (
    <StyledMovieThumb>
        {
            clickable 
            ? <>
                <Link to={`/${movieId}`} >
                    <img className='clickable' src={image} alt='moviethumb' />
                    <p>{movieName}</p>
                </Link>
              </>
            : <img src={image} alt='moviethumb' />
        }
    </StyledMovieThumb>
)

export default MovieThumb;