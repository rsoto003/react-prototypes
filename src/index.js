import React from 'react';
import ReactDOM from 'react-dom';



const user = {
    name: 'ryan',
    luckyNumber: luckyNumber()
}

function luckyNumber(){
    return parseInt(Math.random() * 1000);
}

function greeting(obj){
    return (
        <div class="container">
            <h1>Hello, {obj.name}!</h1>
            <h2 class="text-muted">Your lucky number is: {obj.luckyNumber}</h2>
        </div>
    )
}
ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
