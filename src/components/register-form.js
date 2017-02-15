const React = require('react')
const request = require('superagent')
const { connect } = require('react-redux')


module.exports = class RegisterForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault()

    const username = this.refs.username.value
    const email = this.refs.email.value
    const password = this.refs.password.value

    request.post('/api/v1/auth/register')
      .send({email, password, username})
      .end((err, res) => {
        if(err){
          console.log(err)
        } else {
            if(!res.body.isUser){
              alert('User email already exists')
            } else {
              request.post('/api/v1/auth/login')
                .send({email, password})
                .end((err, res) => {
                  if(err) {
                    console.log(err);
                  } else {
                    if(!res.body.isUser){
                      alert('Please login')
                      this.props.router.push('/login-register')
                    } else {
                        const user = res.body.userData
                        const userID = res.body.userData.id
                        const userName = res.body.userData.username
                        this.props.dispatch({type:'UPDATE_USER', payload: user})
                        this.props.router.push(`/users/${userID}/profile`)
                      }
                    }
                })
              }
          }
      })
  }

  render() {
    return (
      <div>
        <div className='register-header'>Register</div>
            <div className='register-container'>
              <div className='columns small-centered small-10 medium-6 large-4'>
                <form method='post' action='/register'>
                  <input type='text' className='username' ref='username' placeholder='User Name' />
                  <input type='email' className='email' ref='email' placeholder='Email' />
                  <input type='password' className='password' ref='password' placeholder='Password' />
                  <input type='password' className='confirmPassword' ref='confirmPassword' placeholder='Confirm password' />
                  <button  className='button expanded hollow' onClick={this.handleSubmit.bind(this)}>
                    Create Account
                  </button>
                </form>
              </div>
            </div>
      </div>
    )
  }
}

// if (todoText.length > 0) {
//   this.refs.loginText.value = ''
//   dispatch(actions.startAddTodo(todoText))
//
// } else {
//   this.refs.registerText.focus()
// }
