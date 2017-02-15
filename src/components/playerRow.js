const React = require('react')
const { Link } = require('react-router')
const request = require('superagent')

const playerRow = (props) => {
  const {dispatch, player, users} = props
  console.log('playerRow.js props', props)


  return (
    <tr>
      <td>{player.player_name}</td>
      <td>{player.player_token}</td>
      <td>{player.group_name}</td>
      <td>{player.prac_sounds_total_wrong}</td>
      <td>{player.prac_words_total_wrong}</td>
      <td>
        <Link to={`/players/${player.player_token}/trend`}><button className='button expanded'>Trend</button></Link>
      </td>
      <td>
        <button className='button expanded'onClick={
          ()=>dispatch({type:'EDIT_PLAYER', payload:player.player_token})
          }>
            Edit
        </button>
      </td>
        <button className='button expanded' onClick={()=>handleDelete(dispatch, player.id_player, users.id)}>
            Delete
        </button>
      <td>
      </td>
    </tr>
  )
}

module.exports = playerRow

function handleDelete(dispatch, id_player, id) {
  request.post('api/v1/players/deletePlayer')
  .send({id_player: id_player, id: id})
  .end((err, res)=>{
    console.log('playerRow res.body', res.body);
    if (err) return console.log('error!')
    dispatch({type:'DELETE_PLAYER', payload: id_player})
  })
}
