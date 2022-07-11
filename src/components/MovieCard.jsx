import React from "react";
import { setAltText } from "../helpers";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
// import { motion } from "framer-motion";



const MovieCard = ({ movie }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        // this is the movie cover
        <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
            <div className='movie' id="front" onClick={handleClick}>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://svgshare.com/i/icY.svg'}
                    alt={setAltText(movie.Title)} />
                <div className='movie-info'>
                    <span id={'titleBar'}>{movie.Type}</span>
                    <h3>{movie.Title}</h3>
                </div>
            </div>
{/* this is the back of the movie cover */}
            <div className='movie' id="back" onClick={handleClick}>
                <h2 className="backTitle">Back</h2>
                <div className='quip-list'>
                    <h3>Quips</h3>
                </div>
            </div>
        </ReactCardFlip>
    );
}

export default MovieCard;