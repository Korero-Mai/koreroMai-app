const React = require('react')
const { connect } = require('react-redux')
const Step1path1 = require('../components/step1path1')

function Adventure(props) {
  return (
    <div>
      <h1>Adventure</h1>
      <Step1path1 />
    </div>
  )
}

module.exports = connect((state) => state)(Adventure)

//   const currentStep = switch ([event.step, event.path]) {
//   case [1, 1] :
//   return <step1path1 />
//
//
//     break;
//   default:
//
// }
//
// <step1path1 />
// <step2path1 />
// <step2path2 />
