import { useEffect } from "react";

// 9d041017

const API_URL = 'http://www.omdbapi.com?apikey=9d041017';

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('spiderman');
    }, []);

    return (
        <h1>App</h1>
    );
}

export default App;