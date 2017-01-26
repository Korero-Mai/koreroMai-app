const React = require('react')
const { connect } = require('react-redux')
const { link } = require('react-router')
const _ = require('lodash')

const Home = (props) => {

  return (
    <div>
      <h3 className="welcome">Kia ora! Welcome to Drink Splitter</h3>
      <p>We will help you figure out which one of your friends owes you for the drinks on your night out.</p>
      <p><i>Disclaimer: Drink Splitter takes no responsibility for unpaid bills or dodgy friends.</i></p>
    </div>
  )
}

module.exports = connect((state) => state)(Home)
