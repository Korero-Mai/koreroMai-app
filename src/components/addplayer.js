const React = require('react')
const { connect } = require('react-redux')

 class AddPlayer extends React.Component {
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
        <div className='row add-player'>
          <h1>Add Player</h1>
          <div className='columns small-centered '>
            <input type='text' name='name' ref='name' placeholder='Player Name' />
            <input type='text' name='token' ref='token' placeholder='Token' />
            <button className='button expanded'
              onClick={()=>dispatch({type:"ADD_PLAYER"})}>Submit</button>
            </div>
          </div>
    )
  }
}

module.exports = connect((state) => state)(AddPlayer)
