import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {v1} from 'uuid';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);



export type TechnologyType = {
    id: string
    title: string
    isDone: boolean
}
export type TechnologiesArrayType = Array<TechnologyType>;
// const technologiesInitialState: TechnologiesArrayType = [
//     {id: v1(), tech: 'HTML', isDone: true},
//     {id: v1(), tech: 'CSS', isDone: true},
//     {id: v1(), tech: 'LESS', isDone: false},
//     {id: v1(), tech: 'JS', isDone: true},
//     {id: v1(), tech: 'React', isDone: false},
//     {id: v1(), tech: 'TS', isDone: false},
//     {id: v1(), tech: 'Redux', isDone: false}
// ]

root.render(
    // <App  technologiesInitialState={technologiesInitialState}/>
    <App/>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
