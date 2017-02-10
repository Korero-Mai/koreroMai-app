const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const Nav = require('./components/nav')
const Footer = require('./components/footer')
const LearnSounds = require('./components/learnSounds')

const App = (props) => {
  console.log('app.js', props)
  return (
    <div>
      <Nav />
      {props.children}
     <Footer />
     <LearnSounds props = {props}/>
    </div>
  )
}

module.exports = connect((state) => state)(App)
