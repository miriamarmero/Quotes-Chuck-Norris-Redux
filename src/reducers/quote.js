let initialState = {
    quote: []
}

function reducers(state = initialState, action){
    switch(action.type){
        case 'ADD_QUOTE':
            return {
                ...state,
                quote:[...state.quote, {text: action.text, id: action.id}]
            }
        default:
        return state;
    }
}

export default reducers;