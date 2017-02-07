const React = require('react')
const { connect } = require('react-redux')

function End(props) {
  const score = props.score
  return (
    <div>
      <h1>The End</h1>
      <p>Your score is : {score} !</p>
    </div>
  )
}

module.exports = connect((state) => state)(End)
