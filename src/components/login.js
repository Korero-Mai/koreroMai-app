const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const { RaisedButton } = require('material-ui')

class Login extends React.Component {
  // componentDidMount () {  //lifecycle method
  //   console.log('I am now in the DOM')
  // }
  //
  // componentWillUnmount () {  //lifecycle method
  //   console.log('I am about to be removed from the DOM')
  // }

  render () {
    const { dispatch } = this.props
    return (
      <div>
        <form>
          <div>
          Name:
          <input className='homePageButton' type='text' ref='loginName' placeholder='User Name' />
          Password:
          <input className='homePageButton' type='text' placeholder='Password' />
          </div>
          <RaisedButton onClick={() => dispatch({type: 'LOGIN', payload: this.refs.loginName.value})} >Login </RaisedButton>
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
