import React from 'react';
import { addQuote } from '../actions/quote';

function AddQuote(){
    return <div>
        <button onClick={addQuote}>Add</button>
    </div>
}

export default AddQuote;