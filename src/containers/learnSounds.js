const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const Modal = require('react-modal');

class LearnSounds extends React.Component {

  render() {
    const props = this.props
    const { dispatch, modal, letters } = this.props
    const level = Number(this.props.params.id)
    const activityRoute = 'activity/learn/sounds/'
    const lettersArr = this.props.learnSoundPage[level]

    if (level === 1) {
      return (
        <div>
          <div className='welcome-ll'>
            Learn how to pronounce Te Reo!
          </div>
          <div className='play-box-ll'>
            {this.generateLetter(lettersArr, letters)}
            <div>
              <Link to='activity'>
                <button className='first-back-ll'>
                  ↩
                </button>
              </Link>
              <Link to={activityRoute+(level+1)}>
                <button className='first-next-ll'>
                  ↪
                </button>
              </Link>
            </div>
          </div>
        </div>
      )
    } else if (level === 5) {
      return (
        <div>
          <div className='welcome-ll'>
            Learn how to pronounce Te Reo!
          </div>
          <div className='play-box-ll'>
            {this.generateLetter(lettersArr, letters)}
            <div>
              <Link to={activityRoute+(level-1)}>
                <button className='last-back-ll'>
                  ↩
                </button>
              </Link>
              <button className='finish-ll' onClick={() => dispatch({type: 'TOGGLE_MODAL'})}>
                ★
              </button>
              <Modal isOpen={modal} contentLabel='Modal' className='learn-sounds-modal'>
                <h1>Tumeke! Awesome!</h1>
                <Link to={activityRoute+1}>
                  <button className="button-radius repeat" onClick={() => dispatch({type: 'END_ROUND'})}>
                    Repeat
                  </button>
                </Link><br />
                <Link to='activity'>
                  <button className="button-radius new-activity" onClick={() => dispatch({type: 'END_ROUND'})}>
                    Choose another activity
                  </button>
                </Link>
              </Modal>
            </div>
          </div>
        </div>
      )
    } else return (
      <div>
        <div className='welcome-ll'>
          Learn how to pronounce Te Reo!
        </div>
        <div className='play-box-ll'>
          {this.generateLetter(lettersArr, letters)}
        </div>
        <div>
          <Link to={activityRoute+(level-1)}><button className='nav-back-ll'>↩</button></Link>
          <Link to={activityRoute+(level+1)}><button className='nav-next-ll'>↪</button></Link>
        </div>
      </div>
    )
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  playSound(index) {
    this.refs[index].load()
    this.refs[index].play()
  }

  generateLetter(lettersArr, letters) {
      return lettersArr.map((letter, index) => {
        return (
          <div>
            <audio ref={`${index}`} >
              <source src={`${letters[letter].soundFile}`} preload='auto'/>
            </audio>
            <button onClick={() => this.playSound(index)} className='button-radius'>
              {letter}
            </button>
          </div>
        )
      })
    }
}

module.exports = connect((state) => state)(LearnSounds)
