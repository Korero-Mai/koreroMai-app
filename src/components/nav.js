const React = require('react')
const { connect } = require('react-redux')
const {Link, IndexLink} = require('react-router')
const request = require('superagent')

function Nav(props) {
  const dispatch = props.dispatch
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li onClick={() => dispatch({type: 'END_ROUND'})}>
            <IndexLink to="/" activeClassName="active-link" className='nav-text'>Home</IndexLink>
          </li>
          <li onClick={() => dispatch({type: 'END_ROUND'})}>
            <Link to="/activity" activeClassName="active-link" className='nav-text'>Activities</Link>
          </li>
          <li onClick={() => dispatch({type: 'END_ROUND'})}>
            <Link to="/players" activeClassName="active-link" className='nav-text'>Student login</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <EnterOrExit users={props.users} playerToken={props.playerToken} dispatch={dispatch}/>
        </ul>
      </div>
    </div>
  )
}

module.exports = connect((state) => state)(Nav)

function EnterOrExit(props){
  if (Object.keys(props.users)[0]){
    return (
      <li className="menu-text" onClick={endRound}>
        <Link to={`/users/${props.users.id}/profile`}>{props.users.username}'s profile &emsp;</Link>
        <Link to='/'>
          <button className='button-logout' onClick={() => {
            request.get('api/v1/auth/logout')
            .end((err, data) => {
              if (err) return console.log('error')
              props.dispatch({type: 'LOGOUT_USER'})
            })
          }}>
            Logout
          </button>
        </Link>
      </li>
    )
  } else if (props.playerToken){
    return (
      <li className="menu-text" onClick={endRound}>
        {props.playerToken}'s session  &emsp;
        <Link to='/players'>
          <button onClick={() => {
              props.dispatch({type: 'LOGOUT_PLAYER'})
          }}>
            Logout
          </button>
        </Link>
      </li>
    )
  } else {
    return (
      <li className="menu-text" onClick={endRound}>
         <Link to="login-register"> Teacher login / Register </Link>
      </li>
    )
  }

  function endRound(){
    props.dispatch({type: 'END_ROUND'})
  }
}
