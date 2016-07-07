import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import Routes from './routes'

console.log('Client side activated');

ReactDOM.render(<Router history={browserHistory} routes={Routes}></Router>, document.getElementById('app-container'));
