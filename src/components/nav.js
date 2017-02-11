const React = require('react')
const { connect } = require('react-redux')
const {Link, IndexLink} = require('react-router')


function Nav(props) {
  const dispatch = props.dispatch

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            kia ora!
          </li>
          <li onClick={() => dispatch({type: 'CLOSE_MODAL_RESET_SCORE'})}>
            <IndexLink to="/" activeClassName="active-link" className='nav-text'>Home</IndexLink>
          </li>
          <li onClick={() => dispatch({type: 'CLOSE_MODAL_RESET_SCORE'})}>
            <Link to="/activity" activeClassName="active-link" className='nav-text'>Activities</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
             <Link to="login-register"> Login / Register </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}


module.exports = connect((state) => state)(Nav)
