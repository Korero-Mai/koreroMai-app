const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const request = require('superagent')
const { MuiThemeProvider } = require('material-ui/styles')
const reducer = require('./reducer')
const initialState = require('../state')

//Top Level Components
const App = require('./components/app')
const NightOut = require('./components/containers/nightOutPage')
const UserProfile = require('./components/userProfile')
const UsersList = require('./components/usersList')
const store = createStore(reducer, initialState)

const Root = ({store}) => {
	return (
		<MuiThemeProvider>
			<Provider store = {store}>
				<Router history = {hashHistory}>
					<Route path = '/' component={App}>
						<Route path='/userprofile' component={UserProfile} />
						<Route path='/nightout' component={NightOut} />
						<Route path='/userslist' component={UsersList} />
					</Route>
				</Router>
			</Provider>
		</MuiThemeProvider>
	)
}

document.addEventListener('DOMContentLoaded', () => {
	const root = document.querySelector('#app')
		ReactDOM.render(
			<Root store={store}/>,
			root
		)
	request('/api/v1/main', (err, res) => {
		store.dispatch({type:'UPDATE_USERS', payload: res.body})
	})
})
