const React = require('react')
const { connect } = require('react-redux')

function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome!</p>
    </div>
  )
}

module.exports = connect((state) => state)(Home)
