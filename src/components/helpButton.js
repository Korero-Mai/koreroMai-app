const React = require('react')
const { Link } = require('react-router')
const { connect } = require('react-redux')


function Help(props) {

  return (
    <div className="row">
      <div className="large-4 columns">
        <Link to="help"><button className="help-button">Help</button></Link>
      </div>
   </div>
  )
}

module.exports = connect((state) => state)(Help)
