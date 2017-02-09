const React = require('react')
const {Link, IndexLink} = require('react-router')
import Foundation from 'react-foundation'


const Navigation = () => {
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
            <Link to="/users" activeClassName="active-link">Users</Link>
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

module.exports = Navigation
