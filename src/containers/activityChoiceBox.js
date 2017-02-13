const React = require('react')
const {Link, IndexLink} = require('react-router')
const { connect } = require('react-redux')

function ActivityChoiceBox(props) {
    return (
      <div className='activity-div'>

        <div className='row main'>
          <div className='columns small-centered small-10 medium-6 large-4'>
            <h3 className='h3-choose'>Learn</h3>
            <Link to="/activity/learn/sounds/1"><button className="choose">Letters</button></Link>
            <Link to="/activity/learn/words/1"><button className="choose">Words</button></Link>

            <h3 className='h3-choose'>Practice</h3>
            <Link to="/activity/practice/sounds/1"><button className="choose">Letters</button></Link>
            <Link to="/activity/practice/words/1"><button className="choose">Words</button></Link>
          </div>
        </div>


      </div>
    )

}

module.exports = connect((state) => state)(ActivityChoiceBox)

          // <div className='sea'>
          //   <img src='../images/decoration-images/activity/sea2.png' />
          // </div>
          //
          // <div className='starfish'>
          //   <img src='../images/decoration-images/activity/starfish.png' />
          // </div>
          //
          // <div className='jelly-fish'>
          //   <img src='../images/decoration-images/activity/jelly-fish.png' />
          // </div>
