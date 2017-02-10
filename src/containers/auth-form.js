const React = require('react')
const { connect } = require('react-redux')

function AuthForm(props) {

  return (
    <div>
      <h1 className='page-title'>Login Page</h1>

      <div className='row'>
        <div className='colums small-centered small-10 medium-6 large-4'>
          <div>
            <h3>Login</h3>
              <div className="container__footer">
               <form method='post' action='/'>
                <input type='text' name='name' ref='nameLogin' placeholder='User Name' />
                <input type='password'name='password' ref='passwordLogin' placeholder='Password' />
                <button className='button expanded hollow'>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

module.exports = connect((state) => state)(AuthForm)
