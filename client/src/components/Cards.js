import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Cards extends Component {
    constructor() {
        super();
        this.state = {
            videos: []
        };
    }
    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:4000/videos');
            const data = await response.json();
            this.setState({ videos: [...data] });
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div className="App App-header">
                <div className="container">
                    <div className="row">
                        {this.state.videos.map(video =>
                            <div className="col-md-4" key={video.id}>
                                <Link to={`/player/${video.id}`}>
                                    <div className="card border-0">
                                        <img src={`http://localhost:4000${video.poster}`} alt={video.name} />
                                        <div className="card-body">
                                            <p>{video.name}</p>
                                            <p>{video.duration}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}