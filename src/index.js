const React = require('react')
const ReactDOM = require('ReactDOM')
const Root = ({store}) => {
	return (
			<Provider store = {store}>
				<Router history = {hashHistory}>
					<Route path = '/' component={App} />
				</Router>
			</Provider>
	)
}
