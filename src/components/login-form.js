const React = require('react')
const {connect} = require('react-redux')

module.exports = class LoginForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault()

    const { dispatch } = this.props

    const loginText = this.refs.loginText.value

    if (todoText.length > 0) {
      this.refs.loginText.value = ''
      dispatch(actions.startAddTodo(todoText))

    } else {
      this.refs.todoText.focus()
    }
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
                    <input type='text' name='name' ref='nameLogin' placeholder='User Name' />
                    <input type='password'name='password' ref='passwordLogin' placeholder='Password' />
                    <button className='button expanded hollow'>Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
