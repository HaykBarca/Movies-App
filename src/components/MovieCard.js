import React from 'react';

import InfoTable from './InfoTable';

class MovieCard extends React.Component {
    render() {
        return(
            <div className="movie-card">
                <h1>{this.props.data.Title}</h1>
                <img src={this.props.data.Poster} alt={this.props.data.Title} />
                <InfoTable data={this.props.data} />
            </div>
        );
    }
}

export default MovieCard;
