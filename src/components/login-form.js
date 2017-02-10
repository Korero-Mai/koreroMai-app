const React = require('react')

module.exports = class LoginForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault()

    const email = this.refs.email.value
    const password = this.refs.password.value

    console.log("login info :", email, password);
  }
  render() {
    return (
      <div className="container__footer">
        <h3>Login</h3>
          <div className="container__footer">
            <div className='row'>
              <div className='colums small-centered small-10 medium-6 large-4'>
                <div>
                  <form method='post' action='/'>
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