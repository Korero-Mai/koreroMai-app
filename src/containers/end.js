const React = require('react')
const { connect } = require('react-redux')

function End(props) {
  const stick = props.inventory.stick

  if (stick){
    return (
      <div>
        <h1>The End</h1>
        <p>You bravely stick the chicken to death! You're a hero!</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>The End</h1>
        <p>You unfortunately get pecked to death.</p>
      </div>
    )
  }
}

module.exports = connect((state) => state)(End)
