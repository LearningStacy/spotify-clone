export const initialState = {
    //in the beginning - no user 
    user: null,
    playlists: [],
    playing: false,
    item: null
}

//state - what it is currently, action - sets items aka manipulate how the data looks / value, return = new state 
const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state, user: action.user
            }
            
    
    default:
        return state; //no changes will be done
    }
}

export default reducer;