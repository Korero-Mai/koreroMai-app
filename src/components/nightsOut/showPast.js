const React = require('react')
const { connect } = require('react-redux')
const { FlatButton } = require('material-ui')
const NightsHidden = require('../NightsHidden')
const NightsShowing = require('../NightsShowing')

function ShowPastNights(props) {
  const { dispatch, pastNights } = props
  return props.showingPastNights
    ? <NightsShowing dispatch={dispatch} pastNights={pastNights} />
    : <NightsHidden dispatch={dispatch} />
}

module.exports = ShowPastNights
