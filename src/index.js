const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const reducer = require('./reducer')
const initialState = require('../state')

//Top Level Components
const App = require('./components/app')
const NightOut = require('./components/containers/nightOutPage')

const store = createStore(reducer, initialState)

const Root = ({store}) => {
	return (

				<Router history={hashHistory}>
					<Route path='/' component={App} />
					<Route path='nightout' component={NightOut} />
				</Router>
	)
}

document.addEventListener('DOMContentLoaded', () => {
	const root = document.querySelector('#app')
		ReactDOM.render(
			<Root store={store}/>,
			root
		)
})
