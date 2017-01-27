const React = require('react')
const { connect } = require('react-redux')
const { link } = require('react-router')
const _ = require('lodash')
const request = require('superagent')
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

const UsersList = (props) => {

  const {userName, admin, users, nights, users_nights, dispatch} = props

  if (userName != 'admin') {
    return <img src="http://i.imgur.com/Hm7Xj.gif" />
  } else {

    if (admin.totalNights.length != 0) {
      request('/api/v1/admin', (err, res) => {
        console.log("body", res.body)
      	dispatch({type:'UPDATE_STATE_ADMIN', payload: res.body})
      })
    }

    console.log("props", props)
    function searchTotal(id){
      return  admin.totalNights.filter((night) => {
        return night.id === id
      })[0]
    }

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Latest night out</TableHeaderColumn>
            <TableHeaderColumn>Number of nights out</TableHeaderColumn>
            <TableHeaderColumn>Total owed</TableHeaderColumn>
            <TableHeaderColumn>Total owing</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {_.map(users, (user) => {
            return (
              <TableRow>
                <TableRowColumn>{user.id}</TableRowColumn>
                <TableRowColumn>{user.name}</TableRowColumn>
                <TableRowColumn>01/01/2017</TableRowColumn>
                <TableRowColumn>
                  {searchTotal(user.id)}
                </TableRowColumn>
                <TableRowColumn>100 $</TableRowColumn>
                <TableRowColumn>0 $</TableRowColumn>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  }
}


module.exports = connect((state) => state)(UsersList)
