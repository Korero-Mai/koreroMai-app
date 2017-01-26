const React = require('react')
const { connect } = require('react-redux')
const { link } = require('react-router')
const _ = require('lodash')
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

const UsersList = (props) => {

  const users = props.users

  return (

  <div>
    <h1>All the Users</h1>
    <ul>
      {_.map(users, (user) => {
        return <li key={user.id}>ID {user.id}: {user.name}</li>
      })
    }
  </ul>
  </div>

)

}

module.exports = connect((state) => state)(UsersList)


//
//     <Table>
//   <TableHeader>
//     <TableRow>
//       <TableHeaderColumn>ID</TableHeaderColumn>
//       <TableHeaderColumn>Name</TableHeaderColumn>
//       <TableHeaderColumn>Status</TableHeaderColumn>
//     </TableRow>
//   </TableHeader>
//   <TableBody>
//     <TableRow>
//       <TableRowColumn>1</TableRowColumn>
//       <TableRowColumn>John Smith</TableRowColumn>
//       <TableRowColumn>Employed</TableRowColumn>
//     </TableRow>
//     <TableRow>
//       <TableRowColumn>2</TableRowColumn>
//       <TableRowColumn>Randal White</TableRowColumn>
//       <TableRowColumn>Unemployed</TableRowColumn>
//     </TableRow>
//     <TableRow>
//       <TableRowColumn>3</TableRowColumn>
//       <TableRowColumn>Stephanie Sanders</TableRowColumn>
//       <TableRowColumn>Employed</TableRowColumn>
//     </TableRow>
//     <TableRow>
//       <TableRowColumn>4</TableRowColumn>
//       <TableRowColumn>Steve Brown</TableRowColumn>
//       <TableRowColumn>Employed</TableRowColumn>
//     </TableRow>
//   </TableBody>
// </Table>
// 	)
