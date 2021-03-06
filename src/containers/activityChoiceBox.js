const React = require('react')
const { Link } = require('react-router')
const { connect } = require('react-redux')

function ActivityChoiceBox(props) {
    return (
      <div className='activity-div'>
        <div className='row main'>
          <div className='columns small-centered small-10 medium-6 large-4'>
            <h3 className='h3-choose'>Learn the pronounciation!</h3>
            <Link to='/activity/learn/letters/1'><button className='choose'>Letters</button></Link>
            <Link to='/activity/learn/words/1'><button className='choose'>Full words</button></Link>
            <h3 className='h3-choose'>Practice your learning!</h3>
            <Link to='/activity/practice/letters/1'><button className='choose'>Letters</button></Link>
            <Link to='/activity/practice/words/1'><button className='choose'>Full words</button></Link>
          </div>
      </div>
    </div>
    )
}

module.exports = connect((state) => state)(ActivityChoiceBox)
