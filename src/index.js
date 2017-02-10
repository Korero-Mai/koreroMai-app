const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore, applyMiddleware, compose } = require('redux')
const createHistory = require('history').createHashHistory
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const reducer = require('./reducers')
const initialState = require('../state')
import { routerMiddleware, push } from 'react-router-redux'
require('./style/main.scss')

//Top Level Components
const App = require('./app')
const Home = require('./containers/home')
const ActivityChoiceBox = require('./containers/activityChoiceBox')
const LearnSounds = require('./containers/learnSounds')
const LearnWords = require('./containers/learnWords')
const PracticeSounds = require('./containers/practiceSounds')
const PracticeWords = require('./containers/practiceWords')
const AuthForm = require('./containers/auth-form')

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
         <Route path ='/activity' component={ActivityChoiceBox} />
         <Route path ='/activity/learn/sounds' component={LearnSounds} />
         <Route path ='/activity/learn/words' component={LearnWords} />
         <Route path ='/activity/practice/sounds' component={PracticeSounds} />
         <Route path ='/activity/practice/words' component={PracticeWords} />
         <Route path = '/login-register' component={AuthForm} />
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
