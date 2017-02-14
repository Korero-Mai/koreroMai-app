const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')

 class EditPlayerInfo extends React.Component {
   constructor(props) {
  super(props);

  this.handleChange = this.handleChange.bind(this);
}

  handleSave(e) {
    const {player} = this.props
    request.post('api/v1/players/editPlayer')
    .send({
      player_id: player.id_player,
      player_name: player.player_name,
      group_name: player.group_name
     })
     .end((err, res)=>{
       if (err) return console.log('error!')
       this.playSound(word)
      })

  }

  handleChange(token,key){
    console.log('things', token,key);
    const {dispatch} = this.props

    return function(e){
          console.log('event', e.target.value);
      dispatch({type:'UPDATE_PLAYER_ATTRIBUTE',payload:{
        value: e.target.value,
        key: key,
        player_token: token
      }
    })

    }
  }

  render() {
    const {dispatch, player} = this.props
    return (
      <tr>
        <td>
          <input type="text" placeholder={`${player.player_name}`}
            onChange={this.handleChange(player.id_player,'player_name')}
          >
          </input>
        </td>
        <td>{player.player_token}</td>
          <td>
            <input onChange={this.handleChange(player.id_player,'group_name')} type="text" placeholder={`${player.group_name}`}
            name='group_name'
            >
            </input>
        </td>
        <td>{player.prac_sounds_total_wrong}</td>
        <td>{player.prac_words_total_wrong}</td>
        <td>
          <button className="button expanded">Trend</button>
        </td>
        <td>
          <button className="button expanded" onClick={this.handleSave.bind(this)}>
            Save
          </button>
        </td>
        <td>
          <button className='button expanded'>Delete</button>
        </td>
      </tr>
    )
  }
}

module.exports = EditPlayerInfo
