const React = require('react')
const {Link, IndexLink} = require('react-router')
const { connect } = require('react-redux')

function ActivityChoiceBox(props) {
    return (
    <div>
      <div className='row activity-box'>
        <div className='columns small-centered small-10 medium-6 large-4'>
          <h3 className='h3-choose'>Learn</h3>
          <Link to="/activity/learn/sounds/1"><button className="choose">Letters</button></Link>
          <Link to="/activity/learn/words/1"><button className="choose">Words</button></Link>

          <h3 className='h3-choose'>Practice</h3>
          <Link to="/activity/practice/sounds/1"><button className="choose">Letters</button></Link>
          <Link to="/activity/practice/words/1"><button className="choose">Words</button></Link>
        </div>
      </div>
        <div className='sea'>
          <img src='../images/decoration-images/activity/sea2.png' />
        </div>
        <div className='dolphin'>
          <img src='../images/decoration-images/activity/dolphin.png' />
        </div>
        <div className='jelly-fish'>
          <img src='../images/decoration-images/activity/jelly-fish.png' />
        </div>

    </div>
    )

}

module.exports = connect((state) => state)(ActivityChoiceBox)
