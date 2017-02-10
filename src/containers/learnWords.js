const React = require('react')
const { connect } = require('react-redux')

function LearnWords(props) {

  return (
    <p>component</p>
  )
}

module.exports = connect((state) => state)(LearnWords)
