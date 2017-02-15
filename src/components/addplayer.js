const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')


class AddPlayer extends React.Component {
  handleSave(e) {
    const {id, dispatch, groups} = this.props
    const groupName = this.refs.group_name.value

    request.post('api/v1/players/addPlayer')
    .send({
      player_name: this.refs.player_name.value,
      player_token: this.refs.token.value,
      group_name: this.refs.group_name.value,
      id: id
     })
     .end((err, res) => {
       if (err) return console.log('error!')
       dispatch({type: 'UPDATE_GROUPS', payload: res.body.groups})
      })
  }

  render() {
      return (
          <tr>
            <td><input type='text' name='name'
            placeholder='Player Name' ref='player_name' /></td>
            <td><input type='text' name='token' ref='token' placeholder='Token' /></td>
            <td><input type='text' name='group_name' ref='group_name' placeholder='group name' /></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className='button expanded'
                onClick={this.handleSave.bind(this)}>
                Add
              </button>
            </td>
          </tr>
      )
  }
}

module.exports = connect((state) => state)(AddPlayer)
//
