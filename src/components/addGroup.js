const React = require('react')
const { connect } = require('react-redux')

class AddGroup extends React.Component {
  render() {
      return (
        <div>
          <input className=''type='text' name='name' ref='name' placeholder='Add Group Name' />
          <button className='button extended'>Add Group</button>
        </div>
      )
  }
}

module.exports = connect((state) => state)(AddGroup)
