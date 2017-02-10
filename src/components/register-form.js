const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')


module.exports = class RegisterForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault()

    const username = this.refs.username.value
    const email = this.refs.email.value
    const password = this.refs.password.value

    request.post('/api/v1/register')
      .send({email, password, username})
      .end((err, res) => {
        if(err){
          console.log(err)
        } else {
          const id = res.body[0].id
          // this.props.router.push(`/${id}/profile`)
        }
      })

  }
  render() {
    return (
      <div>
        <h1 className='page-title'></h1>

        <div className='row'>
          <div className='colums small-centered small-10 medium-6 large-4'>
            <div>
              <h3>Register</h3>
                <div className="container__footer">
                 <form method='post' action='/register'>
                   <input type='text' name='username' ref='username' placeholder='User Name' />
                   <input type='email' name='email' ref='email' placeholder='Email' />
                   <input type='password' name='password' ref='password' placeholder='Password' />
                   <input type='password' name='confirmPassword' ref='confirmPassword' placeholder='Confirm password' />
                   <button  className='button expanded hollow' onClick={this.handleSubmit.bind(this)}>Create Account</button>
                </form>
              </div>
            </div>
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
