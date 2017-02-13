const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')


class AddPlayer extends React.Component {
  render() {
      return (
        <tr>
          <td><input type='text' name='name' ref='name' placeholder='Player Name' /></td>
          <td><input type='text' name='token' ref='token' placeholder='Token' /></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><button className="button expanded">Add</button></td>
          <td><button className="button expanded">Edit</button></td>
        </tr>
      )
  }
}

module.exports = connect((state) => state)(AddPlayer)
