export const initialState = {
    //in the beginning - no user 
    user: null,
    playlists: [],
    playing: false,
    item: null, 
    token: null,
    top_artists: null,
}

//state - what it is currently, action - sets items aka manipulate how the data looks / value, return = new state 
const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state, user: action.user
            }
            
        case 'SET_TOKEN':
            return {
                ...state, token: action.token
            }

        case 'SET_PLAYLISTS':
            return{
                ...state, playlists: action.playlists,
            }

        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state, discover_weekly: action.discover_weekly,
            }

        case 'SET_TOP_ARTISTS':
            return {
                ...state, top_artists: action.top_artists,
            }
    
    default:
        return state; //no changes will be done
    }
}

export default reducer;