import React from "react";
import { setAltText } from "../helpers";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import '../App.css';


const MovieCard = ({ movie }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
            <div className='movie' id="front" onClick={handleClick}>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://svgshare.com/i/icY.svg'}
                        alt={setAltText(movie.Title)} />
                    <span>{movie.Type}</span>
                    <h3>{movie.Title}</h3>
            </div>

            <div className='movie' id="back" onClick={handleClick}>
                <p>Back</p>
            </div>
        </ReactCardFlip>
    );
}

export default MovieCard;