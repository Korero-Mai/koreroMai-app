const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore, applyMiddleware, compose } = require('redux')
const createHistory = require('history').createHashHistory
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const reducer = require('./reducers')
const initialState = require('../state')

//Top Level Components
const App = require('./components/app')
const Home = require('./components/home')
const Users = require('./components/users')

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=> {
	console.log('Index.js state log', store.getState());
})

const Root = ({store}) => {
	return (
		<Provider store = {store}>
			<Router history = {hashHistory}>
				<Route path = '/' component={App}>
					<IndexRoute component={Home} />
						<Route path = '/users' component={Users} />
				</Route>
			</Router>
		</Provider>
	)
}

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOMContentLoaded');
	const root = document.querySelector('#app')

	ReactDOM.render(
		<Root store={store}/>,
		root
	)
})
