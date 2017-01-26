const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const ReactDOM = require('react-dom')
const {TextField}= require('material-ui');
const {RaisedButton} = require('material-ui')
const request = require('superagent')

const NewUser = React.createClass({
	handleSubmit:function(e){
		e.preventDefault()
	console.log("this.refs.userName",this.refs.userName.value);
	const userName = this.refs.userName.value
	const email = this.refs.email.value
	const password = this.refs.password.value
	const confirmPassword = this.refs.confirmPassword.value

	const newUserData = {
		'userName':userName,
		'email':email,
		'password':password
	}

	if(userName.length>0){
		request.post('/api/v1/main')
		.send({newUserData})
		.end((err, data)=>{
			console.log('post from newUserPage newUserData:',newUserData, err);
		})
		this.refs.userName.input.value = ''
		this.refs.email.input.value = ''
		this.refs.password.input.value = ''
		this.refs.confirmPassword.input.value =''

	} else{
		this.refs.userName.focus()
	}
},
render: function(){

	return (
		<div>
		<h2>New User Form</h2>
		<form>
			<p>Name:</p><input type='text' ref='userName' placeholder='User Name' />
			<p>Email:</p><input type='text' ref='email' placeholder='email' />
		  <p>Password:</p><input type='text' ref='password' placeholder='password' />
			<p>Confirm Password:</p><input type='text' ref='confirmPassword' placeholder='Confirm password' />
			<button onClick={this.handleSubmit} className='button'>Creat Acount</button>
		</form>
		</div>
	)
}
})

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
