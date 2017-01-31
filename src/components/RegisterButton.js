const React = require('react')
const {RaisedButton} = require('material-ui')

function RegisterButton(props) {
  console.log(props)
  return (
    <div className='homePageButton'>
      <RaisedButton className='homePageButton' onClick={() => props.dispatch({type: 'DISPLAY_REGISTER_FORM'})}>Register </RaisedButton>
    </div>
  )
}

export default RegisterButton
