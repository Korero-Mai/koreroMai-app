const React = require('react')
const request = require('superagent')

module.exports = class LoginForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault()

    const email = this.refs.email.value
    const password = this.refs.password.value

    request.post('/api/v1/login')
      .send({email, password})
      .end((err, res) => {
        if(err) {
          console.log(err);
        } else {
          if(!res.body.isUser){
            alert('Please login')
            this.props.router.push('/login-register')
          } else {
              console.log('loginform res', res);
              alert('You are now logged in!')
              this.props.router.push('/')
            }
          }
      })


  }
  render() {
    return (
      <div className="container">
        <h3>Login</h3>
          <div className="container__footer">
            <div className='row'>
              <div className='colums small-centered small-10 medium-6 large-4'>
                <div>
                  <form method='post' action='/login'>
                    <input type='text' name='email' ref='email' placeholder='Email' />
                    <input type='password' name='password' ref='password' placeholder='Password' />
                    <button className='button expanded hollow' onClick={this.handleSubmit.bind(this)}>Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}


//
// if (todoText.length > 0) {
//   this.refs.loginText.value = ''
//   dispatch( actions.startAddTodo(todoText))
//
// } else {
//   this.refs.todoText.focus()
// }
