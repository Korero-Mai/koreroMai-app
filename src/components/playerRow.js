const React = require('react')


const playerRow = (props) => {
  const {dispatch, player} = props

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
}

module.exports = playerRow
