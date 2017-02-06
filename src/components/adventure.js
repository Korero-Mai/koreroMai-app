const React = require('react')
const { connect } = require('react-redux')

function Adventure(props) {
  return (
    <div>
      <h1>Adventure</h1>
      <p>You see a stick on the ground</p>
      <button>Take it</button>
      <button>Leave it</button>
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
