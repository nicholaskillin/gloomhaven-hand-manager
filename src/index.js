import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'

// Instantiate and start Bugsnag
Bugsnag.start({
  apiKey: process.env.REACT_APP_BUGSNAG_KEY,
  plugins: [new BugsnagPluginReact()],
})

var ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React)

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)

function FallbackComponent() {
  return <p>Welp...</p>
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
