import { useState, useEffect } from "react";
import './App.css';
// import searchIcon from './search.svg';
import MovieCard from './components/MovieCard';
import randomWords from 'random-words';
import { motion } from 'framer-motion';

const API_URL = 'https://www.omdbapi.com?apikey=9d041017';

const App = () => {
    let emptyList = [];
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

    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 150, 0)",
        },
        visible: {
            pathLength: 150,
            fill: "rgba(255, 255, 150, 0.4)",
        }
    }

    const transition = { duration: 7, repeat: Infinity, ease: "easeInOut" };

    return (
        <div className='app'>
            <h1 className="page-title">Movie Quip</h1>

            <form id="search" className='search' onSubmit={(e) => {
                searchMovies(searchTerm) && e.preventDefault();
                //    below can be used to collect search data and compiled in list to export to database
                console.log(searchTerm)
            }}>
                {/* need to reset the form input */}
                <input
                    id="search-input"
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearch(e.target.value) && setSearch('')}
                />

                <svg xmlns="http://www.w3.org/2000/svg"
                    alt='search'
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    type="submit"
                    strokeWidth={4}
                >

                    <motion.path
                        d="M29.8594 29.8594L39.4219 39.4219"
                        transition={transition}
                        stroke="#DA9100"
                        variants={icon}
                        initial="hidden"
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        animate="visible"
                        className="search-icon"
                        alt='search'
                        onClick={() => searchMovies(searchTerm)}

                    />

                    <motion.path
                        className={'lil-circle'}
                        d="M17.9062 33.0469C26.2682 33.0469 33.0469 26.2682 33.0469 17.9062C33.0469 9.54431 26.2682 2.76562 17.9062 2.76562C9.54431 2.76562 2.76562 9.54431 2.76562 17.9062C2.76562 26.2682 9.54431 33.0469 17.9062 33.0469Z"
                        transition={transition}
                        stroke="#DA9100"
                        variants={icon}
                        initial="hidden"
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        animate="visible"
                        fill={"none"}
                        strokeDashoffset="0px"
                        strokeDasharray="482px 482px"
                        onClick={() => searchMovies(searchTerm)}
                    />
                </svg>
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