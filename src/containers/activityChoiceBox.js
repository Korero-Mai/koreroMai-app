const React = require('react')
const {Link, IndexLink} = require('react-router')
const { connect } = require('react-redux')

function ActivityChoiceBox(props) {
    return (
      <div className='row'>
        <div className='columns small-centered small-10 medium-6 large-4'>
          <h3>Learn</h3>
          <Link to="/activity/learn/sounds"><button className="button radius">Letters</button><br /></Link>
          <Link to="/activity/learn/words"><button className="button radius">Words</button><br /></Link>

          <h3>Practice</h3>
          <Link to="/activity/practice/sounds"><button className="button radius">Letters</button><br /></Link>
          <Link to="/activity/practice/words"><button className="button radius">Words</button><br /></Link>
        </div>
      </div>
    )

}

module.exports = connect((state) => state)(ActivityChoiceBox)
