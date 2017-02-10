const React = require('react')
const { connect } = require('react-redux')

function PracticeWords(props) {

  return (
    <p>component</p>
  )
}

module.exports = connect((state) => state)(PracticeWords)
