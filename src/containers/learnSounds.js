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
          <div className='welcome'>
            Learn how to pronounce Te Reo!
          </div>
          <div className="play-box">
            {this.generateLetter(lettersArr, letters)}
            <div className='row'>
              <div className='columns small-centered small-10 medium-6 large-4'>
                <Link to='activity'><button className="first-back">Back</button></Link>
                <Link to={activityRoute+(level+1)}><button className="first-next">Next</button></Link>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (level === 5){
      return (
        <div>
          <div className='welcome'>
            Learn how to pronounce Te Reo!
          </div>
          <div className='play-box'>
            {this.generateLetter(lettersArr, letters)}
            <div>
              <Link to={activityRoute+(level-1)}><button className="last-back">Back</button></Link>
              <button className='finish' onClick={() => dispatch({type: 'TOGGLE_MODAL'})}>Finish!</button>
              <Modal isOpen={modal} contentLabel='Modal' className='learn-sounds-modal'>
              <h1>Tumeke! Awesome!</h1>
              <Link to={activityRoute+1}><button className="button-radius repeat" onClick={() => dispatch({type: 'END_ROUND'})}>Repeat</button></Link><br />
              <Link to='activity'><button className="button-radius new-activity" onClick={() => dispatch({type: 'END_ROUND'})}>Choose another activity</button></Link>
              </Modal>
            </div>
          </div>
        </div>
      )
    } else return (
      <div>
        <div className='welcome'>
          Learn how to pronounce Te Reo!
        </div>
        <div className="play-box">
          {this.generateLetter(lettersArr, letters)}
        </div>
        <div className='row'>
          <div className='colums small-centered small-10 medium-6 large-4'>
            <Link to={activityRoute+(level-1)}><button className="nav-back">Back</button></Link>
            <Link to={activityRoute+(level+1)}><button className="nav-next">Next</button></Link>
          </div>
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

  generateLetter(lettersArr,letters){
      return lettersArr.map((letter,index)=>{
        return (
          <div className='row'>
            <div className='columns small-centered small-12 medium-6 large-4'>
              <audio ref={`${index}`} >
                <source src={`${letters[letter].soundFile}`} preload=''/>
              </audio>
              <button onClick={() => this.playSound(index)} className='button-radius'>
                {letter}
              </button>
          </div>
        </div>
        )
      })
    }
}

module.exports = connect((state) => state)(LearnSounds)
