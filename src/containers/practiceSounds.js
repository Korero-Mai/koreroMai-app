const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const Modal = require('react-modal')
const request = require('superagent')

class PracticeSounds extends React.Component {

  componentWillMount() {
    Modal.setAppElement('body');
  }

  playSound(index) {
    this.refs[index].load()
    this.refs[index].play()
  }

  generateAnswer(lettersArr, answer, letters) {
    return lettersArr.map((item) => {
      if (item === answer) {
        return (
          <div className='note'>
            <div className='row'>
              <div className='colums small-10 medium-6 large-4'>
                <audio ref={`${answer}`} >
                  <source src={`${letters[item].soundFile}`} preload=''/>
                </audio>
                <h1 onClick={() => this.playSound(item)}>♫</h1>
              </div>
            </div>
          </div>
        )
      }
    })
  }

  // <button  className='listen-sound-buttons' onClick={() => {
  //   request.post('api/v1/players/scores')
  //   .send({
  //     player_token: this.props.playerToken,
  //     wrongSounds: this.props.wrongSounds,
//       wrongWords: this.props.wrongWords
//      })
  //   this.playSound(letter)}
  // }>

  generateLetter(lettersArr,letters, answer){

    const timeoutModal = function(){
      setTimeout(() => {
        dispatch({type: 'TOGGLE_MODAL'})}, 550)
    }

    const dispatch = this.props.dispatch
    const modal = this.props.modal
    const level = Number(this.props.params.id)
    const activityRoute = 'activity/practice/sounds/'

    return lettersArr.map((letter,index)=>{
      if (level === 5) {
        if (letter === answer) {
          return (
          <div>
            <div className='row'>
              <div className='columns'>
                <audio ref={`${letter}`} >
                  <source src={`${letters[letter].soundFile}`} preload=''/>
                </audio>
              </div>
            </div>
            <div className='row'>
              <div className='columns' onClick={timeoutModal}>
                <button  className='listen-sound-buttons' onClick={() => {


                  this.playSound(letter)}
                }>
                  {letter}
                </button>
                  <Modal isOpen={modal} contentLabel='Modal' >
                    <div className='correct'>Tika tau - correct!</div>
                    <Link to={activityRoute+1}><button className='button-radius repeat' onClick={() => dispatch({type: 'END_ROUND'})}>Repeat</button></Link><br />
                    <Link to='activity'><button className='button-radius new-activity' onClick={() => dispatch({type: 'END_ROUND'})}>Choose another activity</button></Link>
                  </Modal>
              </div>
            </div>
          </div>
          )
        } else {
          return (
            <div>
              <div className='row'>
                <div className='columns'>
                  <audio ref={`${letter}`} >
                    <source src={`${letters[letter].soundFile}`} preload=''/>
                  </audio>
                </div>
              </div>
              <div className='row'>
                <div className='columns' onClick={() => dispatch({type: 'INCREMENT_WRONGSOUNDS'})}>
                  <button onClick={() => this.playSound(letter)} className='listen-sound-buttons'>
                    {letter}
                  </button>
                </div>
              </div>
            </div>
          )
        }
      } else if (letter === answer) {
        return (
        <div>
          <div className='row'>
            <audio ref={`${letter}`} >
              <source src={`${letters[letter].soundFile}`} preload=''/>
            </audio>
          </div>
          <div className='row'>
            <div className='columns' onClick={timeoutModal}>
              <button onClick={() => this.playSound(letter)} className='listen-sound-buttons'>
                {letter}
              </button>
              <Modal isOpen={modal} contentLabel='Modal' >
                <div className='correct'>Tika tau - correct!</div>
                <Link to={activityRoute+(level+1)}><button className='next-letter' onClick={() => dispatch({type: 'TOGGLE_MODAL'})}>Next one!</button></Link><br />
              </Modal>
            </div>
          </div>
        </div>
        )
      } else {
        return (
          <div>
            <div className='row'>
              <audio ref={`${letter}`} >
                <source src={`${letters[letter].soundFile}`} preload=''/>
              </audio>
            </div>
            <div className='row'>
              <div className='columns' onClick={() => dispatch({type: 'INCREMENT_WRONGSOUNDS'})}>
                <button onClick={() => this.playSound(letter)} className='listen-sound-buttons'>
                  {letter}
                </button>
              </div>
            </div>
          </div>
        )
      }
    })
  }

  render() {
    const props = this.props
    const { dispatch, modal, letters } = this.props
    const level = Number(this.props.params.id)
    const activityRoute = 'activity/practice/sounds/'
    const lettersArr = this.props.practiceSoundPage[level].letters
    const answer = this.props.practiceSoundPage[level].answer

    if (level === 1) {
      return (
        <div>
          <div className='welcome-prac'>
            Click ♫ Listen then choose the right letter!
          </div>
          <div className='play-box row align-spaced'>
            <div className='row'>
              <h1>{this.generateAnswer(lettersArr, answer, letters)}</h1>
            </div>
            {this.generateLetter(lettersArr, letters, answer)}
          </div>
        </div>
      )
    } else if (level === 5){
      return (
        <div>
          <div className='welcome-prac'>
            Click ♫ Listen then choose the right letter!
          </div>
          <div className='play-box row align-spaced'>
            <div className='row'>
              <h1>{this.generateAnswer(lettersArr, answer, letters)}</h1>
            </div>
            {this.generateLetter(lettersArr, letters, answer)}
          </div>
        </div>
      )
    } else return (
        <div>
          <div className='welcome-prac'>
            Click ♫ Listen then choose the right letter!
          </div>
          <div className='play-box row align-spaced'>
            <div className='row'>
            <h1>{this.generateAnswer(lettersArr, answer, letters)}</h1>
            </div>
          {this.generateLetter(lettersArr, letters, answer)}
        </div>
      </div>
    )
  }
}

module.exports = connect((state) => state)(PracticeSounds)
