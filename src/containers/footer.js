const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

function Footer(props) {

  return (
    <footer>
      { disclaimer() }
      { contactInfo() }
    </footer>
  )
}

module.exports = connect((state) => state)(Footer)

function disclaimer(){
  return (
    <p>
      This application is intended for 5 - 6 year old children
      and should not be used for younger aged children.
    </p>

  )
}


function contactInfo(){
  return (
    <p> For more information about this
      product or suggestions contact koreroMai@koreroMai.com
    </p>
  )
}
