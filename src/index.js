import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Clicker } from './Chapters/Chapter-1';
import { Form } from './Chapters/Chapter-2';
import { Chapter011 } from './Chapters/011_Chapter';

ReactDOM.render(
    <div className='Appz'>
        <div className='Appz-inner'>
            <App />
            <Clicker />
            <Form />
        </div>
        <div className='Appz-inner'>
            <Chapter011 />
            Second column
        </div>
    </div>,
    document.getElementById('root')
);
