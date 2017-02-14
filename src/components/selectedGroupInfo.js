const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')
const AddPlayer = require('./addplayer')
const PlayerRow = require('./playerRow')
const EditPLayerRow = require('./editPlayer')


class groupInfo extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
  }



  mapPlayers(players) {
    const { dispatch, editPlayer, id, users} = this.props
    console.log('selectedGroupInfo.js', this.props);


    return players.map((player) => {
        return player.player_token === editPlayer
          ? <EditPLayerRow dispatch={dispatch} player={player} id={id}/>
          : <PlayerRow dispatch={dispatch} player={player} users={users} id={id} />
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
