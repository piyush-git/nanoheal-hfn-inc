import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status: '',
            movie_name: '',
            movies: ''
        }
    }

    search = () => {
        axios
            .post("http://127.0.0.1:5000/search-movies", {
                movie_name: this.state.movie_name,
            })
            .then(response => {
                console.log(response);
                this.setState({
                    status: 200,
                    movies: response.data.movies[0]
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    handleOnChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleClick = () => {
        !this.state.movie_name
            ? alert("Please enter data")
            : this.search();
    };

    render() {
        return (
            <div>
                <label htmlFor="movie_name">
                    <h3>Movie Name</h3>
                </label>
                <br />
                <input
                    id="movie_name"
                    type="text"
                    onChange={event => this.handleOnChange(event)}
                />
                <br />

                <button onClick={this.handleClick}>
                    Search
                </button>

                {
                    this.state.status ? 
    <div>{this.state.movie_name} {this.state.runtime}</div>
                    : null
                }
            </div>
        )
    }
}
