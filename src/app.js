// import './utils.js';
// import subtract, { square, add } from './utils.js';

// class OldSyntax{
//     constructor(){
//         this.name = 'Andre';
//     }
//     getGreting(){
//         return `Hi, my name is ${this.name}.`;
//     }
// }

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax.getGreting());
// const getGreting = oldSyntax.getGreting();
// // console.log(getGreting);


// //-------------

// class NewSyntax{
//     name = 'Jen';
//     getGreting = () => {
//         return `Hi, my name is ${this.name}.`;
//     }
// }

// const newSyntax = new NewSyntax();
// console.log(newSyntax);

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import './styles/styles.scss';
import 'normalize.css';

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    );
};

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

// ReactDOM.render(<IndecisionApp options = {['Porto', 'Lisbon']}></IndecisionApp>, document.getElementById('app'));

