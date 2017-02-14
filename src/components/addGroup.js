const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')


class AddGroup extends React.Component {


  render() {
      return (
        <div className="">
          <input className=''type='text' name='name' ref='name' placeholder='Add Group Name' />
          <button className="button">Add Group</button>
        </div>
      )
  }
}

module.exports = connect((state) => state)(AddGroup)
