const React = require('react')
const {Link, IndexLink} = require('react-router')
const { connect } = require('react-redux')

function ActivityChoiceBox(props) {
    return (
    <div>
      <div className='row-learn'>
        <div className='columns medium-centered small-10 medium-6 large-4'>
          <h3 className='h3-choose'>Learn</h3>
          <Link to="/activity/learn/sounds/1"><button className="button-radius choose">Letters</button></Link>
          <Link to="/activity/learn/words/1"><button className="button-radius choose">Words</button></Link>
        </div>
      </div>

      <div className='row-practice'>
        <div className='columns medium-centered small-10 medium-6 large-4'>
          <h3 className='h3-choose'>Practice</h3>
            <Link to="/activity/practice/sounds/1"><button className="button-radius choose">Letters</button></Link>
          <Link to="/activity/practice/words/1"><button className="button-radius choose">Words</button></Link>
        </div>
      </div>
    </div>
    )

}

module.exports = connect((state) => state)(ActivityChoiceBox)
