const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore, applyMiddleware, compose } = require('redux')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const reducer = require('./reducers')
const initialState = require('../state')
const URL = require('url-parse')
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
const UserProfile = require('./containers/userProfile')
const middleware = routerMiddleware(hashHistory)

const store = createStore(reducer, initialState, applyMiddleware(middleware))

store.subscribe(()=> {
	console.log('Index.js state log', store.getState());
})

hashHistory.listen((ev) => {
  //listen to window.location directly?
  console.log('listen', ev)
  const paths = ev.pathname.split('/')
  if (paths[1] === 'users'){
    
  }
  console.log("paths", paths);
})

const Root = ({store}) => {
	return (
		<Provider store = {store}>
			<Router history = {hashHistory}>
				<Route path = '/' component={App} store={store}>
					<IndexRoute component={Home} />
				 <Route path = '/home' component={Home} />
         <Route path ='/activity' component={ActivityChoiceBox} />
         <Route path ='/activity/learn/sounds/:id' component={LearnSounds} />
         <Route path ='/activity/learn/words/:id' component={LearnWords} />
         <Route path ='/activity/practice/sounds/:id' component={PracticeSounds} />
         <Route path ='/activity/practice/words/:id' component={PracticeWords} />
         <Route path = '/login-register' component={AuthForm} />
         <Route path = 'users/:id/profile' component={UserProfile} />
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
