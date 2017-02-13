const React = require('react')
const { connect } = require('react-redux')

 class EditUserInfo extends React.Component {
  // handleSubmit(e) {
  //   e.preventDefault()
  //
  //   const userName = this.refs.userName.value
  //   const email = this.refs.email.value
  //
  // }
  render() {
    const {dispatch} = this.props
    return (
        <div className='row edit-user-form'>
          <div className='columns small-centered '>
            <input type='text' name='name' ref='email' placeholder='User Name' />
            <input type='text' name='email' ref='email' placeholder='Email' />
            <button className='button expanded'
              onClick={()=>dispatch({type:"EDIT_USER"})}>Submit</button>
            </div>
          </div>
    )
  }
}

module.exports = connect((state) => state)(EditUserInfo)
