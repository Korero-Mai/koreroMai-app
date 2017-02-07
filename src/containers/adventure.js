const React = require('react')
const { connect } = require('react-redux')
const Step1path1 = require('../components/step1path1')

function Adventure(props) {
  console.log(props.situation);
  return (
    <div>
      <h1>Adventure</h1>
      <Step1path1 />
    </div>
  )
}

module.exports = connect((state) => state)(Adventure)


// function getSituation(props)
//if state.situation === 11
//display state.steps.11.text + state.steps.11.button1 + state.steps.11.button2
