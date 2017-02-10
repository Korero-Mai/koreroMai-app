const React = require('react')
const { connect } = require('react-redux')

function RegisterForm(props) {

  return (
    <div>
      <h1 className='page-title'>Register Page</h1>

      <div className='row'>
        <div className='colums small-centered small-10 medium-6 large-4'>
          <div>
            <h3>Register</h3>
              <div className="container__footer">
               <form method='post' action='/'>
                 <input type='text' ref='userName' placeholder='User Name' />
                 <input type='email' ref='email' placeholder='Email' />
                 <input type='password' ref='password' placeholder='Password' />
                 <input type='password' ref='confirmPassword' placeholder='Confirm password' />
                 <button  className='button expanded hollow'>Create Account</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

module.exports = connect((state) => state)(RegisterForm)
