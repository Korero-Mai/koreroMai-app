const React = require('react')
const { connect } = require('react-redux')

function Adventure(props) {
  const situation = props.situation
  const { text, button1, button2, button1Action, button2Action } = props.steps[situation]

  return (
    <div>
      <h1>Adventure</h1>
      <p>{text}</p>
      <button onClick={() => props.dispatch(button1Action)}>{button1}</button>
      <button onClick={() => props.dispatch(button2Action)}>{button2}</button>
    </div>
  )
}

module.exports = connect((state) => state)(Adventure)

//
