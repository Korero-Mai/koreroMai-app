const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const Modal = require('react-modal');
const request =require('superagent')

class PracticeWords extends React.Component {

  componentWillMount() {
    Modal.setAppElement('body');
  }

  playSound(index) {
    this.refs[index].load()
    this.refs[index].play()
  }

  generateAnswer(wordsArr, answer, words) {
    return wordsArr.map((word) => {
      if (word === answer) {
        return (
          <div>
            <audio ref={`${answer}`} >
              <source src={`${words[word].soundFile}`} preload='auto'/>
            </audio>
            <div>
              <button className='button listenButton' onClick={() => this.playSound(word)}>Listen!</button> Choose the right one!
            </div>
          </div>
        )
      }
    })
  }

  generateWord(wordsArr, words, answer){

    const timeoutModal = function(){
      setTimeout(() => {
        dispatch({type: 'TOGGLE_MODAL'})}, 400)
    }

    const dispatch = this.props.dispatch
    const modal = this.props.modal
    const level = Number(this.props.params.id)
    const activityRoute = 'activity/practice/words/'

    return wordsArr.map((word,index)=>{
      if (level === 5) {
        if (word === answer) {
          return (
          <div>
            <div className='row'>
              <div className="columns"  onClick={timeoutModal}>
                <img src={`${words[word].imageFile}`}  onClick={() => {
                  request.post('api/v1/players/scores')
                  .send({
                    player_token: this.props.playerToken,
                    wrongSounds: this.props.wrongSounds,
                    wrongWords: this.props.wrongWords
                   })
                   .end((err, res)=>{
                     if (err) return console.log('error!')
                     this.playSound(word)
                   })
                    setTimeout(() => {dispatch({type: 'HIDE_TRY_AGAIN'})}, 150)
                  }}/>
                <audio ref={`${word}`} >
                  <source src={`${words[word].soundFile}`} preload='auto'/>
                </audio>
              </div>
            </div>
            <div className='row'>
              <div className='columns' onClick={timeoutModal}>
              <button  className='listen-sound-buttons' onClick={() => {
                request.post('api/v1/players/scores')
                .send({
                  player_token: this.props.playerToken,
                  wrongSounds: this.props.wrongSounds,
                  wrongWords: this.props.wrongWords
                 })
                 .end((err, res)=>{
                   console.log('res,', res);
                   if (err) return console.log('error!')
                   this.playSound(word)
                 })
                  setTimeout(() => {dispatch({type: 'HIDE_TRY_AGAIN'})}, 150)
                }}>
                {word}
              </button>
                  <Modal isOpen={modal} contentLabel='Modal' className='prac-words-modal' >
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
              <div className="row">
                <div className="columns" onClick={() => dispatch({type: 'INCREMENT_WRONGWORDS'})}>
                  <img src={`${words[word].imageFile}`} onClick={() => {
                      this.playSound(word)
                      setTimeout(() => {dispatch({type: 'SHOW_TRY_AGAIN'})}, 400)
                    }}/>
                  <audio ref={`${word}`} >
                    <source src={`${words[word].soundFile}`} preload='auto'/>
                  </audio>
                </div>
              </div>
              <div className='row'>
                <div className='columns' onClick={() => dispatch({type: 'INCREMENT_WRONGWORDS'})}>
                  <button className='listen-sound-words' onClick={() => {
                      this.playSound(word)
                      setTimeout(() => {dispatch({type: 'SHOW_TRY_AGAIN'})}, 400)
                    }}>
                    {word}
                  </button>
                </div>
              </div>
            </div>
          )
        }
      } else if (word === answer) {
        return (
        <div>
          <div className="row">
            <div className="columns" onClick={timeoutModal}>
              <img src={`${words[word].imageFile}`}  onClick={() => {
                  this.playSound(word)
                  setTimeout(() => {dispatch({type: 'HIDE_TRY_AGAIN'})}, 150)
                }}/>
              <audio ref={`${word}`} >
                <source src={`${words[word].soundFile}`} preload='auto'/>
              </audio>
            </div>
          </div>
          <div className='row'>
            <div className='columns' onClick={timeoutModal}>
              <button className='listen-sound-words' onClick={() => {
                  this.playSound(word)
                  setTimeout(() => {dispatch({type: 'HIDE_TRY_AGAIN'})}, 150)
                }}>
                {word}
              </button>
              <Modal isOpen={modal} contentLabel='Modal' className='prac-words-modal' >
                <div className='correct'>Tika tau - correct!</div>
                <Link to={activityRoute+(level+1)}><button className='button-radius repeat' onClick={() => dispatch({type: 'TOGGLE_MODAL'})}>↪</button></Link><br />
              </Modal>
            </div>
          </div>
        </div>
        )
      } else {
        return (
          <div>
            <div className="row">
              <div className="columns" onClick={() => dispatch({type: 'INCREMENT_WRONGWORDS'})}>
                <img src={`${words[word].imageFile}`} onClick={() => {
                    this.playSound(word)
                    setTimeout(() => {dispatch({type: 'SHOW_TRY_AGAIN'})}, 400)
                  }}/>
                <audio ref={`${word}`} >
                  <source src={`${words[word].soundFile}`} preload='auto'/>
                </audio>
              </div>
            </div>
            <div className='row'>
              <div className='columns' onClick={() => dispatch({type: 'INCREMENT_WRONGWORDS'})}>
                <button className='listen-sound-words'
                  onClick={() => {
                    this.playSound(word)
                    setTimeout(() => {dispatch({type: 'SHOW_TRY_AGAIN'})}, 400)
                  }}>
                  {word}
                </button>
              </div>
            </div>
          </div>
        )
      }
    })
  }

  render() {
    const { dispatch, modal, words } = this.props
    const level = Number(this.props.params.id)
    const activityRoute = 'activity/practice/words/'
    const wordsArr = this.props.practiceWordPage[level].words
    const answer = this.props.practiceWordPage[level].answer

    function WrongAnswerCue(props){
      return props.showWrong ? <h1>Try again!</h1> :  <div></div>
    }

    if (level === 1) {
      return (
        <div>
          <div className='welcome-prac'>
            {this.generateAnswer(wordsArr, answer, words)}
          </div>
          <div className="play-box row align-spaced">
            {this.generateWord(wordsArr, words, answer)}
          </div>
          <WrongAnswerCue showWrong={this.props.showWrong}/>
        </div>
      )
    } else if (level === 5){
      return (
        <div>
        <div className='welcome-prac'>
          {this.generateAnswer(wordsArr, answer, words)}
        </div>
          <div className='play-box row align-spaced'>
            {this.generateWord(wordsArr, words, answer)}
          </div>
          <WrongAnswerCue showWrong={this.props.showWrong}/>
        </div>
      )
    } else return (
      <div>
      <div className='welcome-prac'>
        {this.generateAnswer(wordsArr, answer, words)}
      </div>
        <div className='play-box row align-spaced'>
          {this.generateWord(wordsArr, words, answer)}
        </div>
        <WrongAnswerCue showWrong={this.props.showWrong}/>
      </div>
    )
  }
}
module.exports = connect((state) => state)(PracticeWords)
