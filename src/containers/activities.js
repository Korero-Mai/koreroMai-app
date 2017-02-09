const React = require('react')
const {Link, IndexLink} = require('react-router')
import {Button, Row, Column } from 'react-foundation'


const Activities = () => {
  return (
    <Row>
      <Column>
      <h3>Learn</h3>
      <Link to="activities"><button className="button radius" onClick={() => props.dispatch({type: 'UPDATE_SITUATION'})}>Sounds</button></Link><br />
      <Link to="activities"><button className="button radius" onClick={() => props.dispatch({type: 'UPDATE_SITUATION'})}>Words</button></Link><br />
      <h3>Practice</h3>
      <Link to="activities"><button className="button radius" onClick={() => props.dispatch({type: 'UPDATE_SITUATION'})}>Sounds</button></Link><br />
      <Link to="activities"><button className="button radius" onClick={() => props.dispatch({type: 'UPDATE_SITUATION'})}>Words</button></Link><br />
      </Column>
    </Row>

  )
}

module.exports = Activities
