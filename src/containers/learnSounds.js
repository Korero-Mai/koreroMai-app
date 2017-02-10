const React = require('react')
const { connect } = require('react-redux')

function LearnSounds(props) {

  return (
    <p>component</p>
  )
}

module.exports = connect((state) => state)(LearnSounds)
