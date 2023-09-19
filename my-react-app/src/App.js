import React, { useState, useEffect } from 'react';
import "./App.css";
import searchIcon from "./searchIcon.png";
import MovieCard from './MovieCard';
import Footer from './Footer';

const API_URL = "http://www.omdbapi.com?apikey=6215a013";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        // Search for "Home Alone" by default when the component mounts
        searchMovies('Home Alone');
    }, []);

    return (
        <div className='app'>
            <h1>Movie-Land</h1>
            <div className='search'>
                <input
                    placeholder='search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    className='searchIcon'
                    src={searchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie) =>
                                <MovieCard key={movie.imdbID} movie={movie} />
                            )}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>No movies found</h2>
                        </div>
                    )
            }
            <Footer />
        </div>
    );
}

export default App;
