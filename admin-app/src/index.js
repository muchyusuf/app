import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './index.css';
import App from './App';

ReactDOM.render(
    <Router>
        <App/>
    </Router>
 ,document.getElementById('root'));
registerServiceWorker();
