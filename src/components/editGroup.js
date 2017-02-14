const React = require('react')
const { connect } = require('react-redux')

 class EditGroup extends React.Component {
  // handleSubmit(e) {
  //   e.preventDefault()
  //
  //   const userName = this.refs.userName.value
  //   const email = this.refs.email.value
  //
  // }

  render() {
    const {dispatch, player} = this.props
    return (
      <tr>
        <td><input type="text" value={`${player.player_name}`}></input></td>
        <td><input type="text" value={`${player.player_token}`}></input></td>
        <td><input type="text" value={`${player.group_name}`}></input></td>
        <td>{player.prac_sounds_total_wrong}</td>
        <td>{player.prac_words_total_wrong}</td>
        <td>
          <button className="button expanded">Trend</button>
        </td>
        <td>
          <button className="button expanded">Submit</button>
        </td>
        <td>
          <button className='button expanded'>Delete</button>
        </td>
      </tr>
    )
  }
}

module.exports = connect((state) => state)(EditGroup)
