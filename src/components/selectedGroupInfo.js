const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')
const AddPlayer = require('./addplayer')
const dispatch = require('superagent')

class groupInfo extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
  }

  mapPlayers(group) {

    return group.map((player) => {
        const { dispatch } = this.props
      console.log('props in groupInfo', this.props);
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
            <button className='button expanded'onClick={
              ()=>dispatch({type:"EDIT_PLAYER", payload:player.player_token})
              }>
              Edit
            </button>
          </td>
          <td>
            <button className='button expanded'>Delete</button>
          </td>
        </tr>
      )
    })


  }

  render() {

    return  (
      <div className="row">
        <h2>{this.props.players.group_name} Information:</h2>
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
              {this.mapPlayers(this.props.players.players)}
              <AddPlayer />
            </tbody>
          </table>
      </div>
    )
  }
}

module.exports = connect((state) => state)(groupInfo)
