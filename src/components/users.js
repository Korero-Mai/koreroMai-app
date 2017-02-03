const React = require('react')
const { connect } = require('react-redux')

function Users(props) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
  			<li>Mathieu</li>
  			<li>Meghan</li>
  			<li>Bill</li>
  			<li>Lucas</li>
  			<li>Janie</li>
  			<li>Anna-Marie</li>
  			<li>Rodrigo</li>
  			<li>Mischa</li>
  		</ul>
    </div>
  )
}

module.exports = connect((state) => state)(Users)
