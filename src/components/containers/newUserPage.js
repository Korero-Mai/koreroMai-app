const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const ReactDOM = require('react-dom')
const {TextField}= require('material-ui');
const {RaisedButton} = require('material-ui')

const NewUser = (props) => {

	return (
		<div>
		<h2>New User Form</h2>
		<form>
			<p>Name:</p><input type='text' ref='addNewUser' placeholder='User Name' />
			<p>Email:</p><input type='text' ref='addNewUser' placeholder='email' />
		  <p>Password:</p><input type='text' ref='addNewUser' placeholder='password' />
			<p>Confirm Password:</p><input type='text' ref='addNewUser' placeholder='Add a new user' />
			<button className='button'>Submit</button>
		</form>
		</div>
	)
}

module.exports = connect((state) => state)(NewUser)

// <div>
// 	<TextField
// 		disabled={true}
// 		hintText="User Name"
// 	/><br />
// 	<TextField
// 		disabled={true}
// 		hintText="Email"
// 	/><br />
// 	<TextField
// 		disabled={true}
// 		hintText="Password"
// 	/><br />
// 	<TextField
// 		disabled={true}
// 		hintText="Confirm Password"
// 	/><br />
// 	<RaisedButton label="Submit" style={style} />
// </div>
