const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')

class groupInfo extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    const id = Number(this.props.id)
    request.get(`/api/v1/users/${id}/profile`, function(err, res, next) {
      dispatch({type: 'UPDATE_PLAYERS', payload: res.body.players})
    })
  }

  mapPlayers(players) {
    return players.map((player) => {
      return (
        <tr>
          <td>{player.player_name}</td>
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
    })
  }

  render() {
    return (
      <div className="row">
        <h2>Group A Information:</h2>
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
              {this.mapPlayers(this.props.players)}
            </tbody>
          </table>
      </div>
    )
  }
}

module.exports = connect((state) => state)(groupInfo)
