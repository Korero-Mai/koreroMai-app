const React = require('react')
const { connect } = require('react-redux')

function End(props) {
  return (
    <div>
      <h1>The End</h1>
      <p>Your score is : [score be here]!</p>
    </div>
  )
}

module.exports = connect((state) => state)(End)
