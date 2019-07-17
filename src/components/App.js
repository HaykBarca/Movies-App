import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { fetchMovie } from '../actions';
import MovieCard from './MovieCard';
import Loading from './Loading';
import '../styles/style.css'

class App extends React.Component {
    onGetMovies = (terms) => {
        this.props.fetchMovie(terms);
    }

    onEnterInput (key) {
        if (key === 13) {
            this.onGetMovies(this.state.terms);
        }
    }

    renderCards () {
        if (this.props.isLoading) {
            return(<Loading />);
        } else if (!this.props.isLoading && this.props.movie) {
            return(<MovieCard data={{...this.props.movie}} />);
        } else {
            return(<p>No Movie</p>);
        }
    }

    render() {
        return(
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    <div className="panel-container">
                        <Input
                            className="input-custom"
                            onChange={e => { this.setState({ terms: e.target.value }) }}
                            onKeyDown={e => this.onEnterInput(e.keyCode)} placeholder="Search for Movie"
                        />
                        <Button className="button-custom" variant="outlined" color="primary" onClick={() => this.onGetMovies(this.state.terms)}>
                            Get Movie
                        </Button>
                    </div>
                    {this.renderCards()}
                </Container>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return { movie: state.movie, isLoading: false, };
}

export default connect(mapStateToProps, {
    fetchMovie
})(App);
