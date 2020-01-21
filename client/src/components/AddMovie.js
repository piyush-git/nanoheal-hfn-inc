import React, { Component } from 'react';
import axios from 'axios';

export default class AddMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status: '',
            movie_name: '',
            ratings: '',
            runtime: '',
            poster_url: ''
        }
    }

    add = () => {
        axios
            .post("http://127.0.0.1:5000/add-movie", {
                movie_name: this.state.movie_name,
                ratings: this.state.ratings,
                runtime: this.state.runtime,
                poster_url: this.state.poster_url
            })
            .then(response => {
                console.log(response);
                this.setState({
                    status: 200
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
        !this.state.movie_name || !this.state.ratings || !this.state.runtime || !this.state.poster_url
            ? alert("Please enter data")
            : this.add();
    };

    render() {
        return (
            <div>
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

                    <label htmlFor="ratings">
                        <h3>Ratings</h3>
                    </label>
                    <br />
                    <input
                        id="ratings"
                        type="number"
                        onChange={event => this.handleOnChange(event)}
                    />
                    <br />

                    <label htmlFor="runtime">
                        <h3>Runtime</h3>
                    </label>
                    <br />
                    <input
                        id="runtime"
                        type="number"
                        onChange={event => this.handleOnChange(event)}
                    />
                    <br />

                    <label htmlFor="poster_url">
                        <h3>Poster URL</h3>
                    </label>
                    <br />
                    <input
                        id="poster_url"
                        type="text"
                        onChange={event => this.handleOnChange(event)}
                    />
                    <br />

                    <button onClick={this.handleClick}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}
