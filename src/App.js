import {useState} from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg'

//c032e2d7

const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';

/*const movie = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}*/

const App=()=>{

    const [movies, setMovies]=useState([]); //empty array
    //setter function setMovies
    const [searchTerm, setSearchTerm]=useState('');

    //searching movies based on the provided title
    const searchMovies = async(title)=>{
        //allowing the API to search for movies with that title
        const response = await fetch(`${API_URL}&s=${title}`)
        //converts it to JSON format
        const data=await response.json();

        setMovies(data.Search); 
        //updates the movies state with the Search property of the data object
    }

    //perform side effect
    /*useEffect(()=>{
        //perform side effects in functional components
        searchMovies('Spiderman');
    },
   // This empty array tells React that the effect should only run once
    []);*/

    return(
        <div className='app'>
            {/* Movie Title */}
            <h1>Movie</h1>

            <div className='search'>
                {/* Input field for searching movies */}
                <input placeholder='Search for movies'
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon} alt='search' onClick={()=> searchMovies(searchTerm)}/>
            </div>

            {
                //It is used to check if a property exists on an object before accessing its value
                movies?.length >0 ?(
                    <div className='container'>
                        {/* .map((movie)) It iterates over each element in the movies array */}
                        {movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ): (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }

            
        </div>
    );
}

export default App;