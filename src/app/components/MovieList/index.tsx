'use client';

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';

export interface MovieType{
    title: string,
    poster_path: string,
    overview: string,
    vote_average: number,
}

export default function Navbar(){
    const [movies, setMovies] = useState<MovieType[]>([]);
    
    useEffect(() => {
        getMovies();
    }, []);
    const getMovies = () => {
        axios({
            method : 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'a9ade7349bb6332be3da799406ba0a10',
                lenguage: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results);
        })
    }

    return(
        <ul className="movie-list">
            {movies.map((movie) =>
                <li className='movie-card'>
                    <p>
                    {movie.title}
                    </p>
                    <p className='description'>
                        {movie.overview}
                    </p>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                     alt=""
                    />
                    <p>
                        {movie.vote_average}
                    </p>
                </li>
            )}
        </ul>
    );
}