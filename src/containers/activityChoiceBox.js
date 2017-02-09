const React = require('react')
const {Link, IndexLink} = require('react-router')
const { connect } = require('react-redux')

function ActivityChoiceBox(props) {
  return (
    <div className='row'>
      <div className='columns small-centered small-10 medium-6 large-4'>
        <h3>Learn</h3>
        <button className="button radius" onClick={() => props.dispatch({type: 'UPDATE_ACTIVITY', })}>Sounds</button><br />
        <button className="button radius" onClick={() => props.dispatch({type: 'UPDATE_ACTIVITY'})}>Words</button><br />
        <h3>Practice</h3>
        <button className="button radius" onClick={() => props.dispatch({type: 'UPDATE_ACTIVITY'})}>Sounds</button><br />
        <button className="button radius" onClick={() => props.dispatch({type: 'UPDATE_ACTIVITY'})}>Words</button><br />
      </div>
    </div>
  )
}

module.exports = connect((state) => state)(ActivityChoiceBox)
