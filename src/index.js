import './index.css'

import * as serviceWorker from './serviceWorker'

import App from './App'
import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'
import Cookies from 'universal-cookie'
import React from 'react'
import ReactDOM from 'react-dom'

// Instantiate and start Bugsnag
Bugsnag.start({
  apiKey: process.env.REACT_APP_BUGSNAG_KEY,
  enabledReleaseStages: ['production', 'staging'],
  plugins: [new BugsnagPluginReact()],
  onError: function (event) {
    // Grab cookie data to help track down the issue
    const cookies = new Cookies()
    let cookieInfo = cookies.getAll()  

    event.addMetadata('cookies', {
      ...cookieInfo
    })
  }
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
  return <p>Looks like you've hit a bug. Information about this has already been sent and I will look into it. For now, you can refresh the page to get things set back up.</p>
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
