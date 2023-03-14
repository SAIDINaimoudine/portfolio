import ReactDOMServer from 'react-dom/server.node.js'
import React from 'react'
import { App } from './App.js'

ReactDOMServer.renderToString(<App />)
