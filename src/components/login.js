const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const { RaisedButton } = require('material-ui')
const request = require('superagent')

const AuthErr = require('./AuthErr')




const Login = React.createClass ({

  handleSubmit: function (e) {
    e.preventDefault()
    const { dispatch } = this.props

    const name = this.refs.loginName.value
    const password = this.refs.passwordEntry.value

    request.post('api/v1/login')
      .send({ name, password })
      .end((err, data) => {
        if (err) {
          dispatch({type: 'AUTH_ERR', payload: 'Invalid Username/Password'})
        }else if(data.body === false){
          dispatch({type: 'AUTH_ERR', payload: 'Invalid Username/Password'})
        }else{
          dispatch({type: 'LOGIN', payload: data.body.name})
        }
      })



  },
  // componentDidMount () {  //lifecycle method
  //   console.log('I am now in the DOM')
  // }
  //
  // componentWillUnmount () {  //lifecycle method
  //   console.log('I am about to be removed from the DOM')
  // }

  render: function() {
    const { dispatch } = this.props
    console.log(this.props);

    return (
      <div>
        <form>
          <div>
              Name:
              <input className='homePageButton' type='text' ref='loginName' placeholder='User Name' />
              Password:
              <input className='homePageButton' type='text' ref='passwordEntry' placeholder='Password' />
          </div>
          <RaisedButton onClick={this.handleSubmit} >Login </RaisedButton>
          <AuthErr  {...this.props} />
        </form>
      </div>
    )
  }
})

module.exports = connect((state) => state)(Login)
