const React = require('react')
const { connect } = require('react-redux')

function UserGroups(props) {

  return (
    <div>
      <h2>Groups</h2>
      {mapGroups(props)}
    </div>
  )
}

module.exports = connect((state) => state)(UserGroups)

function mapGroups(props){
  return (
      <div>
        <button className='button expanded hollow'>Group A</button>
        <button className='button expanded'>Delete</button>
      </div>
  )
}
