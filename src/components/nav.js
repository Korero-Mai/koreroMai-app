const React = require('react')
const { connect } = require('react-redux')
const {Link, IndexLink} = require('react-router')


function Nav(props) {
  const dispatch = props.dispatch
  if (!Object.keys(props.users)[0]) {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              Kia ora!
            </li>
            <li onClick={() => dispatch({type: 'END_ROUND'})}>
              <IndexLink to="/" activeClassName="active-link" className='nav-text'>Home</IndexLink>
            </li>
            <li onClick={() => dispatch({type: 'END_ROUND'})}>
              <Link to="/activity" activeClassName="active-link" className='nav-text'>Activities</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text" onClick={() => dispatch({type: 'END_ROUND'})}>
               <Link to="login-register"> Login / Register </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  } else {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              Kia ora!
            </li>
            <li onClick={() => dispatch({type: 'END_ROUND'})}>
              <IndexLink to="/" activeClassName="active-link" className='nav-text'>Home</IndexLink>
            </li>
            <li onClick={() => dispatch({type: 'END_ROUND'})}>
              <Link to="/activity" activeClassName="active-link" className='nav-text'>Activities</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text" onClick={() => dispatch({type: 'END_ROUND'})}>
              <Link to={`/users/${props.users.id}/profile`}>{props.users.username}'s profile</Link>
              <br />
              <Link to='/'><button onClick={() => dispatch({type: 'LOGOUT_USER'})}>Logout</button></Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

module.exports = connect((state) => state)(Nav)
