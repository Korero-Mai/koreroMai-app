const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

class PlayersHome extends React.Component {
  render() {
    return (
        <div className='homepage-div'>
          <div className='row main-heading'>
            <div className='columns small-centered small-12 medium-6 large-4'>
              <h1 className="h1-home">Kōrero Mai</h1><br />
            </div>
          </div>
          <div className='row sub-heading'>
            <div className='columns small-centered small-12 medium-6 large-4'>
              <h3 className="h3-home">Learn Te Reo!</h3>
            </div>
          </div>
          <div className='row main-button'>
            <div className='columns small-centered small-12 medium-6 large-4'>
              <input type="text" placeholder="Enter token" ref="token"/>
              <Link to="activity">
                <button className="play-button" onClick={() => {
                      this.props.dispatch({type:'UPDATE_PLAYERTOKEN', payload: this.refs.token.value})
                  }}>
                    PLAY!
                  </button>
                </Link>
            </div>
          </div>
        </div>
      )
  }
}

// <button className="play-button" onClick={() => {
//     request.post('api/v1/players/login')
//     .send(this.refs.token.value)
//     .end((err, data) => {
//       if (err) return console.log('error!')
//       props.dispatch({type:'UPDATE_PLAYERTOKEN', payload: this.refs.token.value})
//     })
//   }}>

module.exports = connect((state) => state)(PlayersHome)
