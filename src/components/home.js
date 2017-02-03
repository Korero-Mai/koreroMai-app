const React = require('react')
const { connect } = require('react-redux')

function Home(props) {
  return (
    <div>Home</div>
  )
}

module.exports = connect((state) => state)(Home)
