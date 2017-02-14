const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')
const AddGroup = require('./addGroup')


class UserGroups extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    const id = Number(this.props.id)
    request.get(`/api/v1/users/${id}/profile`, function(err, res, next) {
      dispatch({type: 'UPDATE_GROUPS', payload: res.body.groups})
    })
  }

 mapGroups(groups){
   const { dispatch } = this.props
   const groupKeys = Object.keys(groups)
    return groupKeys.map(group => {
      return (
        <div className="">
          <button className='button expanded hollow '
              onClick={()=>dispatch({type:"UPDATE_PLAYERS", payload:{players: groups[group], group_name:group}
            })
          }>
            {group}
          </button>
          <button className='button expanded alert '>Delete</button>
        </div>
      )
    })
  }

  render() {
    return(
      <div className="large-8 columns">
        <h2>Groups</h2>
          {this.mapGroups(this.props.groups)}
          <AddGroup />
      </div>
    )
  }

}

module.exports = connect((state) => state)(UserGroups)
