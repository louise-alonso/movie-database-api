'use client';

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { Movie } from '@/types/movie';
import MovieCard from '../MovieCard';

export interface MovieType{
    id: number,
    title: string,
    poster_path: string,
    overview: string,
    vote_average: number,
}

export default function Navbar(){
    const [movies, setMovies] = useState<Movie[]>([]);
    
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
                <MovieCard
                    key={movie.id}
                    movie ={movie}
                    />
            )}
        </ul>
    );
}