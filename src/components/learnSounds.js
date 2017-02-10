const React = require('react')
const { connect } = require('react-redux')

function LearnSounds(props) {
console.log('learnSounds props',props)
  return (
    <div>
      <button className="button radius">hi</button>
      <button className="button radius">te</button>
      <button className="button radius">ka</button>
    </div>
  )
}

module.exports = connect((state) => state)(LearnSounds)
