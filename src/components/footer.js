const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

function Footer(props) {

  return (
    <div className="footer">
      { contactInfo() }
    </div>
  )
}

module.exports = connect((state) => state)(Footer)

function contactInfo(){
  return (
    <p> For more information about this
      product or suggestions contact koreromaiapp@gmail.com
    </p>
  )
}
