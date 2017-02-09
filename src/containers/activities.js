const React = require('react')
const {Link, IndexLink} = require('react-router')
import Foundation from 'react-foundation'


const Activities = () => {
  return (
    <div>
      <h3>Learn</h3>
      <Link to="activities"><button onClick={() => props.dispatch({type: 'UPDATE_SITUATION'})}>Sounds</button></Link><br />
      <Link to="activities"><button onClick={() => props.dispatch({type: 'UPDATE_SITUATION'})}>Words</button></Link><br />
      <h3>Practice</h3>
      <Link to="activities"><button onClick={() => props.dispatch({type: 'UPDATE_SITUATION'})}>Sounds</button></Link><br />
      <Link to="activities"><button onClick={() => props.dispatch({type: 'UPDATE_SITUATION'})}>Words</button></Link><br />
    </div>
  )
}

module.exports = Activities
