const React = require('react')
const { connect } = require('react-redux')
const {Link, IndexLink} = require('react-router')


function Nav(props) {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            Korero Mai
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Home</IndexLink>
          </li>
          <li>
            <Link to="/activity" activeClassName="active-link">Activities</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
             <a href="#" target="_blank">Home</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

module.exports = connect((state) => state)(Nav)
