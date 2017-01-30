const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const { RaisedButton } = require('material-ui')
const request = require('superagent')

class Login extends React.Component {
  handleClick () {
    console.log('this', this)
    const email = this.refs.email.value
    const password = this.refs.password.value

    request.post('api/v1/users/login')
      .send({email, password})
      .end((err, response) => {
        if (response.body.login){
          this.props.router.push(`users/${response.body.id}/profile`)
        } else  {
          alert("Wrong password or username")
        }
      })
  }

  render () {
    const { dispatch } = this.props
    return (
      <div>
        <form>
          <div>
          Email:
          <input className='homePageButton' type='text' ref='email' placeholder='email' />
          Password:
          <input className='homePageButton' type='text' ref='password' placeholder='Password' />
          </div>
          <RaisedButton onClick={this.handleClick.bind(this)} >Login </RaisedButton>
        </form>
      </div>
    )
  }
}

module.exports = connect((state) => state)(Login)
// const Login = (props) => {
//   const { dispatch } = props
//   return (
//     <div>
//       <form>
//         <div>
//             Name:
//             <input className='homePageButton' type='text' ref='loginName' placeholder='User Name' />
//             Password:
//             <input className='homePageButton' type='text' placeholder='Password' />
//         </div>
//         <RaisedButton onClick={() => dispatch({type: 'LOGIN', payload: this.refs.loginName})} >Login </RaisedButton>
//       </form>                                                            ^
//     </div>                                                              can't use this.refs with stateless component (functional)
//   )
// }

// const Login = React.createClass({
//   render: function () {
//     const { dispatch } = this.props
//
//     return (
//       <div>
//         <form>
//           <div>
//               Name:
//               <input className='homePageButton' type='text' ref='loginName' placeholder='User Name' />
//               Password:
//               <input className='homePageButton' type='text' placeholder='Password' />
//           </div>
//           <RaisedButton onClick={() => dispatch({type: 'LOGIN', payload: this.refs.loginName.value})} >Login </RaisedButton>
//         </form>
//       </div>
//     )
//   }
// })
