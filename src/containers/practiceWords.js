const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const Modal = require('react-modal');

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
                <source src={`${words[word].soundFile}`} preload=''/>
              </audio>
              <div className='note-word' onClick={() => this.playSound(word)}>♫</div>
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
  generateWord(wordsArr, words, answer){

    const timeoutModal = function(){
      setTimeout(() => {
        dispatch({type: 'TOGGLE_MODAL'})}, 2000)
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
                <img src={`${words[word].imageFile}`} onClick={() => this.playSound(word)}/>
                <audio ref={`${word}`} >
                  <source src={`${words[word].soundFile}`} preload=''/>
                </audio>
              </div>
            </div>
            <div className='row'>
              <div className='columns' onClick={timeoutModal}>
                <button className='listen-sound-words' onClick={() => {this.playSound(word)}}>
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
                <div className="columns">
                  <img src={`${words[word].imageFile}`} onClick={() => this.playSound(word)}/>
                  <audio ref={`${word}`} >
                    <source src={`${words[word].soundFile}`} preload=''/>
                  </audio>
                </div>
              </div>
              <div className='row'>
                <div className='columns' onClick={() => dispatch({type: 'INCREMENT_WRONGWORDS'})}>
                  <button onClick={() => this.playSound(word)} className='listen-sound-words'>
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
              <img src={`${words[word].imageFile}`} onClick={() => this.playSound(word)}/>
              <audio ref={`${word}`} >
                <source src={`${words[word].soundFile}`} preload=''/>
              </audio>
            </div>
          </div>
          <div className='row'>
            <div className='columns' onClick={timeoutModal}>
              <button onClick={() => this.playSound(word)} className='listen-sound-words'>
                {word}
              </button>
              <Modal isOpen={modal} contentLabel='Modal' className='prac-words-modal' >
                <div className='correct'>Tika tau - correct!</div>
                <Link to={activityRoute+(level+1)}><button className='button-radius repeat' onClick={() => dispatch({type: 'TOGGLE_MODAL'})}>Next one!</button></Link><br />
              </Modal>
            </div>
          </div>
        </div>
        )
      } else {
        return (
          <div>
            <div className="row">
              <div className="columns">
                <img src={`${words[word].imageFile}`} onClick={() => this.playSound(word)}/>
                <audio ref={`${word}`} >
                  <source src={`${words[word].soundFile}`} preload=''/>
                </audio>
              </div>
            </div>
            <div className='row'>
              <div className='columns' onClick={() => dispatch({type: 'INCREMENT_WRONGWORDS'})}>
                <button onClick={() => this.playSound(word)} className='listen-sound-words'>
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
    const props = this.props
    const { dispatch, modal, words } = this.props
    const level = Number(this.props.params.id)
    const activityRoute = 'activity/practice/words/'
    const wordsArr = this.props.practiceWordPage[level].words
    const answer = this.props.practiceWordPage[level].answer

    if (level === 1) {
      return (
        <div>
          <div className='welcome-prac'>
            Click ♫ Listen then choose the right letter!
          </div>
          <div className="play-box row align-spaced">
            <div className='row'>
              <h1>{this.generateAnswer(wordsArr, answer, words)}</h1>
            </div>
            {this.generateWord(wordsArr, words, answer)}
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
              <h1>{this.generateAnswer(wordsArr, answer, words)}</h1>
            </div>
            {this.generateWord(wordsArr, words, answer)}
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
            <h1>{this.generateAnswer(wordsArr, answer, words)}</h1>
          </div>
          {this.generateWord(wordsArr, words, answer)}
        </div>
      </div>
    )
  }
}
module.exports = connect((state) => state)(PracticeWords)
