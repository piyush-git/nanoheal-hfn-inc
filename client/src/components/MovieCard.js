import React from 'react';

const MovieCard = (props) => {
    return (
        <div style={{textAlign: 'center'}}>
            <div >
                <img style={{height: 200, width: 350}} src={props.info.poster_url} alt="#"/>
            </div>
            <div>
                <h6 >Ratings: {props.info.ratings}/10</h6>
                <h6 >Runtime: {props.info.runtime} minutes</h6>
                <h5 >Title: {props.info.movie_name}</h5>
            </div>
            <div>                
                <button style={{width: '200px'}}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default MovieCard;