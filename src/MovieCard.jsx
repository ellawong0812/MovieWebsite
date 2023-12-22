import React from 'react';

const MovieCard =({movie})=>{
    return(
        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                {/* alt means if the image fails to show, it would show the text in alt instead */}
                <img src={movie.Poster !== 'N/A'?movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
            </div>

            <div>
                {/*span = in line text*/}
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;