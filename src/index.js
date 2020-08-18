import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import 'antd/dist/antd.css'
import * as serviceWorker from './serviceWorker'
import Modal from './models'
import {
  BrowserRouter as Router
} from 'react-router-dom'

ReactDom.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root')
)
serviceWorker.unregister();