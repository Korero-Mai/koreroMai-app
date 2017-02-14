const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')


class AddGroup extends React.Component {


  render() {
      return (
        <tr>
          <td><input type='text' name='name' ref='name' placeholder='Add Group Name' /></td>
          <td><button className="button expanded">Add Group</button></td>
        </tr>
      )
  }
}

module.exports = connect((state) => state)(AddGroup)
