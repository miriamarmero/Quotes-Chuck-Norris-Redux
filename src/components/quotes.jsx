import React from 'react';
import {connect} from 'react-redux';
import AddQuote from './addQuote';

function quotes(props){
    console.log(props);
    return <div>
        <h1>Quotes about Chuck Norris</h1>
        <AddQuote/>
        {props.quote.map((quote, i) => <p {...quote} key = {i}>{quote.text}</p>)}
    </div>
}

function mapStateToProps(state){
    return{
        quote: state.quote.quote
    }
}

const connection = connect(mapStateToProps)

export default connection(quotes)
