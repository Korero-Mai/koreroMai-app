const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore, applyMiddleware, compose } = require('redux')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const reducer = require('./reducers')
const initialState = require('../state')
const URL = require('url-parse')
const request = require('superagent')
import { routerMiddleware, push } from 'react-router-redux'
require('./style/main.scss')

//Top Level Components
const App = require('./app')
const Home = require('./containers/home')
const PlayersHome = require('./containers/playersHome')
const PlayerTrend = require('./components/playerTrend')
const ActivityChoiceBox = require('./containers/activityChoiceBox')
const LearnLetters = require('./containers/learnLetters')
const LearnWords = require('./containers/learnWords')
const PracticeLetters = require('./containers/practiceLetters')
const PracticeWords = require('./containers/practiceWords')
const HelpPage = require('./containers/helpPage')
const PrivacyPolicy = require('./containers/privacyPolicy')
const AuthForm = require('./containers/auth-form')
const UserProfile = require('./containers/userProfile')
const middleware = routerMiddleware(hashHistory)

const store = createStore(reducer, initialState, applyMiddleware(middleware))

store.subscribe(() => {
  console.log('Index.js state log', store.getState());
})

hashHistory.listen((ev) => {
  //listen to window.location directly?
  const paths = ev.pathname.split('/')
})

const Root = ({store}) => {
  return (
    <Provider store = {store}>
      <Router history = {hashHistory}>
        <Route path = '/' component={App} store={store}>
        <IndexRoute component={Home} />
        <Route path = '/home' component={Home} />
        <Route path = '/players' component={PlayersHome} />
        <Route path = '/players/:id/trend' component={PlayerTrend} />
        <Route path ='/activity' component={ActivityChoiceBox} />
        <Route path ='/help' component={HelpPage} />
        <Route path ='/privacy-policy' component={PrivacyPolicy} />
        <Route path ='/activity/learn/letters/:id' component={LearnLetters} />
        <Route path ='/activity/learn/words/:id' component={LearnWords} />
        <Route path ='/activity/practice/letters/:id' component={PracticeLetters} />
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
  request.get('api/v1/auth/logged-in', (err, res) => {
    if (res.body.authenticated) {
      store.dispatch({type: 'UPDATE_USER', payload: res.body.user})
    }
  })

  ReactDOM.render(
    <Root store={store}/>,
    root
  )
})
