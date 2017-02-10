const React = require('react')
const { connect } = require('react-redux')

function PracticeSounds(props) {

  return (
    <p>component</p>
  )
}

module.exports = connect((state) => state)(PracticeSounds)
