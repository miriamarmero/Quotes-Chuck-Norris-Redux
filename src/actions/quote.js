import store from '../store';
let {dispatch} = store;
const API_URL = 'https://api.chucknorris.io/jokes/random'

async function addQuote(text){
    let quote = await fetch(API_URL)
    let data = await quote.json()

    dispatch({
        type: 'ADD_QUOTE',
        text: data.value,
        id: data.id
    })
}

export{
    addQuote
}