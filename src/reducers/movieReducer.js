export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MOVIE':
            return action.payload;
        case 'LOAD_STATE':
            return action.payload;
        default:
            return state;
    }
}