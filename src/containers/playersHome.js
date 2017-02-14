const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const request = require('superagent')

class PlayersHome extends React.Component {
  render() {
    const {router,dispatch} = this.props
    return (
        <div className='player-homepage-div'>
          <div className='player-main-heading'>
            <h1 className='h1-home-pl'>Kōrero Mai</h1><br />
          </div>
          <div className='row sub-heading'>
            <h3 className='h3-home-pl'>Learn Te Reo!</h3>
          </div>
          <div className='row main-button'>
            <input type='text' className='player-input' placeholder='Enter token' ref='token'/>
              <button className='play-button-pl'
                onClick={() => {
                  request.post('api/v1/players/login')
                    .send({'player_token':this.refs.token.value})
                    .end((err, res) => {
                      if (err) return console.log('error!')
                      if (res.body.login){
                        dispatch({type:'UPDATE_PLAYERTOKEN', payload: this.refs.token.value})
                        router.push('/activity')
                      } else {
                        router.push('/')
                      }
                    })
                  }
                }>
                PLAY!
              </button>
          </div>
        </div>
      )
  }
}

module.exports = connect((state) => state)(PlayersHome)
