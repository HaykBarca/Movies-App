import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


import movies from '../api/movie-database';
import MovieCard from './MovieCard';
import Loading from './Loading';
import '../styles/style.css'

class App extends React.Component {
    state = {
        movie: null,
        terms: '',
        isLoading: false,
    }

    onGetMovies = async (terms) => {
        this.setState({ isLoading: true });
        const response = await movies
            .get('/', {
                params: {
                    apikey: '4730a825',
                    t: terms,
                }
            });
        this.setState({ movie: response.data, isLoading: false });
    }

    onEnterInput (key) {
        if (key === 13) {
            this.onGetMovies(this.state.terms);
        }
    }

    renderCards () {
        if (this.state.isLoading) {
            return(<Loading />);
        } else if (!this.state.isLoading && this.state.movie) {
            return(<MovieCard data={{...this.state.movie}} />);
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

export default App;
