const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const createHistory = require('history').createHashHistory
const { Router, Route, IndexRoute, hashHistory, Link } = require('react-router')

const reducer = require('./reducer')
const initialState = require('../state')

//Top Level Components
const App = require('./components/app')
const NewUser = require('./components/newUser')

const store = createStore(reducer, initialState)

const Root = ({store}) => {
	return (
			<Provider store = {store}>
				<Router history = {hashHistory}>
					<Route path = '/' component={App}/>
					<Route path = 'newUser' component={NewUser} />
				</Router>
			</Provider>
	)
}

document.addEventListener('DOMContentLoaded', () => {
	const root = document.querySelector('#app')
		ReactDOM.render(
			<Root store={store}/>,
			root
		)
})

// <Route path = 'new-user' component={NewUser} />
// <NewUser/>
