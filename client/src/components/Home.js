import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            movies: ''
        }
    }

    apicall = () => {
        axios.get('http://127.0.0.1:5000/list-movies')
        .then(response => {
            this.setState({
                movies: response.data.movies
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    componentDidMount() {
        this.apicall();
    }
    
    render() {
        let counter = 0;
        return (
            <div>
                <div style={{textAlign: 'center', marginTop: '50px'}}>
                    <button>Search Movies</button>
                    <h3>Designed by: Piyush Yadav</h3>
                </div>

                <div id="cont">
                    {
                        this.state.movies ? 
                            this.state.movies.map(ele => {
                                return(
                                    <MovieCard info={ele} key={counter++} />
                                )
                            })
                        : null
                    }
                </div>
            </div>
        )
    }
}
