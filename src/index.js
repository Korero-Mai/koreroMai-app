const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const reducer = require('./reducer')
const initialState = require('../state')

//Top Level Components
const App = require('./components/app')
<<<<<<< HEAD
const NightOut = require('./components/containers/nightOutPage')
=======
const UserProfile = require('./components/userProfile')
>>>>>>> a77e27b88781cb8929be815633a32a485e5fce16

const store = createStore(reducer, initialState)

const Root = ({store}) => {
	return (

			<Provider store = {store}>
				<Router history = {hashHistory}>
					<Route path = '/' component={App}>
						<Route path='/userprofile' component={UserProfile} />
						<Route path='/nightout' component={NightOut} />
					</Route>
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
