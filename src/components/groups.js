const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')
const _= require('lodash')

class UserGroups extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    const id = Number(this.props.id)
    console.log(this.props);
    request.get(`/api/v1/users/${id}/profile`, function(err, res, next) {
      console.log('res.body here', res.body)
      dispatch({type: 'UPDATE_GROUPS', payload: res.body.groups})
    })
  }

 mapGroups(props){
    return (
      <div className="row">
        <button className='button expanded hollow large-9 columns'>Group A</button>
        <button className='button expanded large-3 columns'>Delete</button>
      </div>
    )
  }

  render() {
    return(
      <div className="large-8 columns">
        <h2>Groups</h2>
          {this.mapGroups(this.props.groups)}
      </div>
    )
  }

}

module.exports = connect((state) => state)(UserGroups)
