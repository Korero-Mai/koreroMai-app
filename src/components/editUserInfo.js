const React = require('react')
const { connect } = require('react-redux')

module.exports = class EditUserInfo extends React.Component {
  handleSubmit(e) {
    e.preventDefault()

    const userName = this.refs.userName.value
    const email = this.refs.email.value

  }
  render() {
    return (
        <div className='row edit-user-form'>
          <div className='columns small-centered '>
              <form method='post' action='/login'>
                <input type='text' name='name' ref='email' placeholder='User Name' />
                <input type='text' name='email' ref='email' placeholder='Email' />
                <button className='button expanded hollow' onClick={this.handleSubmit.bind(this)}>Submit</button>
              </form>
            </div>
          </div>
    )
  }
}
