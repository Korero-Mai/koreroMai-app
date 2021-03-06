const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const Modal = require('react-modal')
const request = require('superagent')

class PracticeLetters extends React.Component {

  componentWillMount() {
    Modal.setAppElement('body');
  }

  playSound(index) {
    this.refs[index].load()
    this.refs[index].play()
  }

  generateAnswer(lettersArr, answer, letters) {
    return lettersArr.map((letter) => {
      if (letter === answer) {
        return (
          <div>
            <audio ref={`${answer}`} >
              <source src={`${letters[letter].soundFile}`} preload='auto'/>
            </audio>
            <div>
              <button className='button listenButton' onClick={() => this.playSound(letter)}>Listen!</button> Choose the right one!
            </div>
          </div>
        )
      }
    })
  }

  generateLetter(lettersArr, letters, answer) {

    const timeoutModal = function() {
      setTimeout(() => {
        dispatch({type: 'TOGGLE_MODAL'})}, 400)
    }

    const dispatch = this.props.dispatch
    const modal = this.props.modal
    const level = Number(this.props.params.id)
    const activityRoute = 'activity/practice/letters/'

    return lettersArr.map((letter,index) => {
      if (level === 5) {
        if (letter === answer) {
          return (
          <div>
            <div className='row'>
              <div className='columns'>
                <audio ref={`${letter}`} >
                  <source src={`${letters[letter].soundFile}`} preload='auto'/>
                </audio>
              </div>
            </div>
            <div className='row'>
              <div className='columns' onClick={timeoutModal}>
              <button  className='listen-sound-letters' onClick={() => {
                request.post('api/v1/players/scores')
                .send({
                  player_token: this.props.playerToken,
                  wrongLetters: this.props.wrongLetters,
                  wrongWords: this.props.wrongWords
                 })
                 .end((err, res) => {
                   if (err) return console.log('error!')
                   this.playSound(letter)
                 })
                  setTimeout(() => { dispatch({ type: 'HIDE_TRY_AGAIN'})}, 150)
                }}>
                {letter}
              </button>
                <Modal isOpen={modal} contentLabel='Modal' className='prac-letters-modal' >
                  <div className='correct'>Tika tau - correct!</div>
                  <Link to={activityRoute+1}><button className='button-radius repeat' onClick={() => dispatch({ type: 'END_ROUND'})}>Repeat</button></Link><br />
                  <Link to='activity'><button className='button-radius new-activity' onClick={() => dispatch({ type: 'END_ROUND'})}>Choose another activity</button></Link>
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
                    <source src={`${letters[letter].soundFile}`} preload='auto'/>
                  </audio>
                </div>
              </div>
              <div className='row'>
                <div className='columns' onClick={() => dispatch({ type: 'INCREMENT_WRONGLETTERS'})}>
                  <button className='listen-sound-letters' onClick={() => {
                      this.playSound(letter)
                      setTimeout(() => {dispatch({type: 'SHOW_TRY_AGAIN'})}, 150)
                    }}>
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
              <source src={`${letters[letter].soundFile}`} preload='auto'/>
            </audio>
          </div>
          <div className='row'>
            <div className='columns' onClick={timeoutModal}>
              <button className='listen-sound-letters' onClick={() => {
                  this.playSound(letter)
                  setTimeout(() => { dispatch({ type: 'HIDE_TRY_AGAIN'})}, 150)
                }}>
                {letter}
              </button>
              <Modal isOpen={modal} contentLabel='Modal' className='prac-letters-modal' >
                <div className='correct'>Tika tau - correct!</div>
                <Link to={activityRoute+(level+1)}><button className='next-letter' onClick={() => dispatch({type: 'TOGGLE_MODAL'})}>↪</button></Link><br />
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
                <source src={`${letters[letter].soundFile}`} preload='auto'/>
              </audio>
            </div>
            <div className='row'>
              <div className='columns' onClick={() => dispatch({type: 'INCREMENT_WRONGLETTERS'})}>
                <button className='listen-sound-letters' onClick={() => {
                    this.playSound(letter)
                    setTimeout(() => { dispatch({ type: 'SHOW_TRY_AGAIN'})}, 150)
                  }}>
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
    const activityRoute = 'activity/practice/letters/'
    const lettersArr = this.props.practiceLettersPage[level].letters
    const answer = this.props.practiceLettersPage[level].answer

    function WrongAnswerCue(props) {
      return props.showWrong ? <h1>Try again!</h1> : <div></div>
    }

    if (level === 1) {
      return (
        <div>
          <div className='welcome-letters'>
            {this.generateAnswer(lettersArr, answer, letters)}
          </div>
          <div className='play-box row align-spaced'>
            {this.generateLetter(lettersArr, letters, answer)}
          </div>
          <WrongAnswerCue showWrong={this.props.showWrong}/>
        </div>
      )
    } else if (level === 5) {
      return (
        <div>
          <div className='welcome-letters'>
            {this.generateAnswer(lettersArr, answer, letters)}
          </div>          <div className='play-box row align-spaced'>
            {this.generateLetter(lettersArr, letters, answer)}
          </div>
          <WrongAnswerCue showWrong={this.props.showWrong}/>
        </div>
      )
    } else return (
        <div>
          <div className='welcome-letters'>
            {this.generateAnswer(lettersArr, answer, letters)}
          </div>
          <div className='play-box row align-spaced'>
          {this.generateLetter(lettersArr, letters, answer)}
        </div>
        <WrongAnswerCue showWrong={this.props.showWrong}/>
      </div>
    )
  }
  }

  module.exports = connect((state) => state)(PracticeLetters)
