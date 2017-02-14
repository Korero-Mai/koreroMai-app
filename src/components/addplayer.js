const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')


class AddPlayer extends React.Component {
  handleSave(e){
    const{id, dispatch} = this.props
    console.log('refs', ref);
  }


  render() {
  const {alone, id} = this.props
    console.log('the world',this.props);
      return (

          <tr>
            <td><input type='text' name='name'
            placeholder='Player Name' /></td>
            <td><input type='text' name='token' ref='token' placeholder='Token' /></td>
            <td><input type='text' name='group_name' ref='token' placeholder='group name' /></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="button expanded"
                onClick={this.handleSave.bind(this)}>
                Add
              </button>
            </td>
          </tr>

      )
  }
}

module.exports = connect((state) => state)(AddPlayer)
// ref={(input) =>{textInput = input}}
