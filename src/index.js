const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore, applyMiddleware, compose } = require('redux')
const createHistory = require('history').createHashHistory
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const reducer = require('./reducers')
const initialState = require('../state')
import { routerMiddleware, push } from 'react-router-redux'

//Top Level Components
const App = require('./containers/app')
const Home = require('./containers/home')

const middleware = routerMiddleware(hashHistory)

const store = createStore(reducer, initialState, applyMiddleware(middleware))

store.subscribe(()=> {
	console.log('Index.js state log', store.getState());
})

const Root = ({store}) => {
	return (
		<Provider store = {store}>
			<Router history = {hashHistory}>
				<Route path = '/' component={App}>
					<IndexRoute component={Home} />
						<Route path = '/home' component={Home} />
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
