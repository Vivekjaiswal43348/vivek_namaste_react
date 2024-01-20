import React from 'react';
import ReactDOM from 'react-dom';

const elem = React.createElement('div',{id: "parent"}, 
React.createElement('h1', {id: 'child'}, "I am child h1" )            
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elem);