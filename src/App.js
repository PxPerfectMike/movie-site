import { useState, useEffect } from "react";
import './App.css';
import searchIcon from './search.svg';
import MovieCard from "./MovieCard";
import randomWords from 'random-words';

const API_URL = 'https://www.omdbapi.com?apikey=9d041017';

const App = () => {
    let emptyList = [randomWords()];
    const [movies, setMovies] = useState(emptyList);
    const [searchTerm, setSearch] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies(randomWords());
    }, []);

    return (
        <div className='app'>
            <h1 className="page-title">Movie Quip</h1>

            <form className='search' onSubmit={(e) => searchMovies(searchTerm) && e.preventDefault()}>

                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <img
                    className="search-icon"
                    src={searchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </form>

            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie, index) =>
                                <MovieCard
                                    key={index.toString()}
                                    movie={movie}
                                    id={movie.imdbID}
                                />
                            )}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2 id="empty-search">You haven't entered anything into the search. Please enter a title and search again.</h2>
                        </div>
                    )
            }

        </div>
    );
}

export default App;