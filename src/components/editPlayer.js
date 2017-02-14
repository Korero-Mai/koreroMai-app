const React = require('react')
const { connect } = require('react-redux')

 class EditPlayerInfo extends React.Component {
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
      <tr>
        <td><input type="text" placeholder="{`${player.player_name}`}"></input></td>
        <td>{player.player_token}</td>
        <td>{player.group_name}</td>
        <td>{player.prac_sounds_total_wrong}</td>
        <td>{player.prac_words_total_wrong}</td>
        <td>
          <button className="button expanded">Trend</button>
        </td>
        <td>
          <button className='button expanded'>Edit</button>
        </td>
        <td>
          <button className='button expanded'>Delete</button>
        </td>
      </tr>
    )
  }
}

module.exports = connect((state) => state)(EditPlayerInfo)
