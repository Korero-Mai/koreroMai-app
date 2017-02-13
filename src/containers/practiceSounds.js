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
          <div>
            <audio ref={`${answer}`} >
                  <source src={`${letters[item].soundFile}`} preload='auto'/>
            </audio>
            <div className='note' onClick={() => this.playSound(item)}>♫</div>
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
  //     wrongWords: this.props.wrongWords
  //    })
  //    .end(err, data){
  //       if (err) return console.log('error!')
  //       this.playSound(letter)}
  //       }
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
            <audio ref={`${letter}`} >
                  <source src={`${letters[letter].soundFile}`} preload='auto'/>
            </audio>
            <div onClick={timeoutModal}>
              <button  className='listen-sound-buttons' onClick={() => {
                  this.playSound(letter)
                  setTimeout(() => {dispatch({type: 'HIDE_TRY_AGAIN'})}, 450)
                }}>
                {letter}
              </button>
                <Modal isOpen={modal} contentLabel='Modal' className='prac-sounds-modal' >
                  <div className='correct'>Tika tau - correct!</div>
                  <Link to={activityRoute+1}><button className='button-radius repeat' onClick={() => dispatch({type: 'END_ROUND'})}>Repeat</button></Link><br />
                  <Link to='activity'><button className='button-radius new-activity' onClick={() => dispatch({type: 'END_ROUND'})}>Choose another activity</button></Link>
                </Modal>
            </div>
          </div>
          )
        } else {
          return (
            <div>
              <audio ref={`${letter}`} >
                <source src={`${letters[letter].soundFile}`} preload='auto'/>
              </audio>
              <div onClick={() => dispatch({type: 'INCREMENT_WRONGSOUNDS'})}>
                <button className='listen-sound-buttons' onClick={() => {
                    this.playSound(letter)
                    setTimeout(() => {dispatch({type: 'SHOW_TRY_AGAIN'})}, 450)
                  }}>
                </button>
              </div>
            </div>
          )
        }
      } else if (letter === answer) {
        return (
        <div>
          <audio ref={`${letter}`} >
              <source src={`${letters[letter].soundFile}`} preload='auto'/>
          </audio>

          <div onClick={timeoutModal}>
            <button className='listen-sound-buttons' onClick={() => {
              this.playSound(letter)
              setTimeout(() => {dispatch({type: 'SHOW_TRY_AGAIN'})}, 450)
              }}>
                {letter}
            </button>
            <Modal isOpen={modal} contentLabel='Modal' className='prac-sounds-modal' >
              <div className='correct'>Tika tau - correct!</div>
              <Link to={activityRoute+(level+1)}><button className='next-letter' onClick={() => dispatch({type: 'TOGGLE_MODAL'})}>Next one!</button></Link><br />
            </Modal>
          </div>
        </div>
        )
      } else {
        return (
          <div>
            <audio ref={`${letter}`} >
              <source src={`${letters[letter].soundFile}`} preload='auto'/>
            </audio>
            <div onClick={() => dispatch({type: 'INCREMENT_WRONGSOUNDS'})}>
            <button className='listen-sound-buttons' onClick={() => {
                this.playSound(letter)
                setTimeout(() => {dispatch({type: 'HIDE_TRY_AGAIN'})}, 450)
              }}>
              {letter}
            </button>
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

    function WrongAnswerCue(props){
      return props.showWrong ? <h1>Try again!</h1> :  <div></div>
    }

    if (level === 1) {
      return (
        <div>
          <div className='welcome-letters'>
            Click ♫ Listen then choose the right letter!
          </div>
          <div className='play-box-letters'>
            {this.generateAnswer(lettersArr, answer, letters)}
            {this.generateLetter(lettersArr, letters, answer)}
          </div>
          <WrongAnswerCue showWrong={this.props.showWrong}/>
        </div>
      )
    } else if (level === 5){
      return (
        <div>
          <div className='welcome-letters'>
            Click ♫ Listen then choose the right letter!
          </div>
          <div className='play-box-letters'>
            {this.generateAnswer(lettersArr, answer, letters)}
            {this.generateLetter(lettersArr, letters, answer)}
          </div>
          <WrongAnswerCue showWrong={this.props.showWrong}/>
        </div>
      )
    } else return (
        <div>
          <div className='welcome-letters'>
            Click ♫ Listen then choose the right letter!
          </div>
          <div className='play-box-letters'>
            {this.generateAnswer(lettersArr, answer, letters)}
            {this.generateLetter(lettersArr, letters, answer)}
          </div>
        <WrongAnswerCue showWrong={this.props.showWrong}/>
      </div>
    )
  }
}

module.exports = connect((state) => state)(PracticeSounds)
