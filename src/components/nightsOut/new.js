const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const moment = require('moment')
const _ = require('lodash')
const { FlatButton } = require('material-ui')

class NewNightsOut extends React.Component {
  render() {
    const  { users, dispatch, currentNight } = this.props
    const namesForDisplay = _.map(users, (user) => {
      user.color = currentNight.users.hasOwnProperty(user.id)
        ?'pink'
        :'white'
      return user
    })

    return (
      <div className='welcome'>
        <p>{(moment().format('dddd DD MMMM YYYY'))}</p>
        <h1>Add people to your group</h1>
        {
          namesForDisplay.map((name) => {
            return <FlatButton
              style={{backgroundColor: name.color, margin:'10px', width: '20%'}}
              onClick={()=> dispatch({type:'ADDS_PERSON_TO_CURRENT_NIGHT', payload: name.id})}>
                {name.name}
            </FlatButton>

          })
        }
        <Link to='nightout'>
          <button>submit</button>
        </Link>
      </div>
    )
  }
}

module.exports =  connect((state) => state)(NewNightsOut)
