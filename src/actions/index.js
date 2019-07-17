import movies from '../api/movie-database';

export const fetchMovie = (terms) => async dispatch => {
    const response = await movies
        .get('/', {
            params: {
                apikey: '4730a825',
                t: terms,
            }
        });

    dispatch({ type: 'FETCH_MOVIE', payload: response.data });
}

export const isLoading = (bool) => dispatch => {
    dispatch({ type: 'LOAD_STATE', payload: bool });
}