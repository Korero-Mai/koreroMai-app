const React = require('react')
const { connect } = require('react-redux')

function groupInfo(props) {

  return (
    <div className="row">
      <h2>Group A Information:</h2>
      <table className="hover">
          <thead>
            <tr>
              <th>Student</th>
              <th>token</th>
              <th>Practice Sounds Total Score</th>
              <th>Practice Words Total Score</th>
              <th>trends</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {mapStudents(props)}
          </tbody>
        </table>
    </div>
  )
}

module.exports = connect((state) => state)(groupInfo)

function mapStudents(props){
  return (
      <tr>
         <td>Annie</td>
         <td>annie123</td>
         <td>4</td>
         <td>6</td>
         <td>
           <button className="button expanded">Trend</button>
         </td>
         <td>
           <button className='button expanded'>Edit</button>
         </td>
         <td>
           <button className='button expanded'>Delete</button>
         </td>
      </tr>
  )
}
