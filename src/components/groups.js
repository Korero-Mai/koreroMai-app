const React = require('react')
const { connect } = require('react-redux')

function UserGroups(props) {

  return (
    <div className="large-8 columns">
      <h2>Groups</h2>
      {mapGroups(props)}
    </div>
  )
}

module.exports = connect((state) => state)(UserGroups)

function mapGroups(props){
  return (
    <div className="row">
      <button className='button expanded hollow large-6 columns'>Group A</button>
      <button className='button expanded large-6 columns'>Delete</button>
    </div>
  )
}
