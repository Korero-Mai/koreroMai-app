const React = require('react')
const {Link, IndexLink} = require('react-router')
const { connect } = require('react-redux')

function ActivityChoiceBox(props) {
  const activity = props.activity

  if (!Object.keys(activity).length) {
    return (
      <div className='row'>
        <div className='columns small-centered small-10 medium-6 large-4'>
          <h3>Learn</h3>
          <button className="button radius"
            onClick={() => props.dispatch({type: 'UPDATE_ACTIVITY',
            activity: "learnSounds"})}>Sounds
          </button><br />
          <button className="button radius"
            onClick={() => props.dispatch({type: 'UPDATE_ACTIVITY',
              activity: "learnWords"})}>Words
          </button><br />
          <h3>Practice</h3>
          <button className="button radius"
            onClick={() => props.dispatch({type: 'UPDATE_ACTIVITY',
             activity: "practiceSounds"})}>Sounds
          </button><br />
          <button className="button radius"
            onClick={() => props.dispatch({type: 'UPDATE_ACTIVITY',
              activity: "practiceWords"})}>Words
          </button><br />
        </div>
      </div>
    )
  } else if (activity.learnSounds){
    return (
      <h1>learnSounds component</h1>
    )
  } else if (activity.learnWords){
    return (
      <h1>learnWords component</h1>
    )
  } else if (activity.practiceSounds){
    return (
      <h1>practiceSounds component</h1>
    )
  } else if (activity.practiceWords){
    return (
      <h1>practiceWords component</h1>
    )
  }
}

module.exports = connect((state) => state)(ActivityChoiceBox)
