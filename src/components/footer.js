const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const HelpButton = require('./helpButton')

function Footer(props) {

  return (
    <div className="footer">
      { contactInfo() }
    <HelpButton />
    </div>
  )
}

module.exports = connect((state) => state)(Footer)

function contactInfo(){
  return (
    <p> &copy; 2017 Contact us - koreromaiapp@gmail.com
    </p>
  )
}
