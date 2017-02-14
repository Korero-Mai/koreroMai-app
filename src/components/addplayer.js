const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')


class AddPlayer extends React.Component {
  standalone(){

    return (
      <div className="row">
        <h2>New Group Information:</h2>
        <table className="hover">
            <thead>
              <tr>
                <th>Student</th>
                <th>Token</th>
                <th>Group</th>
                <th>Practice Sounds Total Score</th>
                <th>Practice Words Total Score</th>
                <th>trends</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type='text' name='name' ref='name' placeholder='Player Name' /></td>
                <td><input type='text' name='token' ref='token' placeholder='Token' /></td>
                <td><input type='text' name='group_name' ref='token' placeholder='group name' /></td>
                <td></td>
                <td></td>
                <td></td>
                <td><button className="button expanded">Add</button></td>
                <td><button className="button expanded">Edit</button></td>
              </tr>
            </tbody>
          </table>
      </div>
    )
  }

  partofTable(){
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

  render() {
    console.log('the world',this.props);
      return <div>Hello</div>
  }
}

module.exports = connect((state) => state)(AddPlayer)
