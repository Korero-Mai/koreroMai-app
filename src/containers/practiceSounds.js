const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const Modal = require('react-modal');

//loop through level
//play one SOUND
//give same SOUND to ♫
//give their respective sound to each letter
//on click of ♫ : play sound
// on click of letter : play sound and check if SOUND === sound
// if true, play a RIGHT sound, increment score, go to next
//if false, play a WRONG sound, until true

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
          <div className="row">
            <div className="columns">
              <audio ref={`${answer}`} >
                <source src={`${letters[item].soundFile}`} preload=''/>
              </audio>
              <h1 onClick={() => this.playSound(item)}>♫</h1>
            </div>
          </div>
        )
      }
    })
  }

  generateLetter(lettersArr,letters, answer){
    const dispatch = this.props.dispatch
    const modal = this.props.modal
    const modalStyle = {
      content:{
        top:'50%',
        left:'50%',
        right:'auto',
        bottom:'auto',
        marginRight:'-50%',
        transform:'translate(-50%, -50%)'
      }
    }

    const level = Number(this.props.params.id)
    const activityRoute = 'activity/practice/sounds/'

    return lettersArr.map((letter,index)=>{
      if (level === 5) {
        if (letter === answer) {
          return (
          <div>
            <div className="row">
              <div className="columns">
                <audio ref={`${letter}`} >
                  <source src={`${letters[letter].soundFile}`} preload=''/>
                </audio>
              </div>
            </div>
            <div className="row">
              <div className="columns" onClick={() => dispatch({type: 'OPEN_MODAL'})}>
                <button onClick={() => this.playSound(letter)} className={`button radius`}>
                  {letter}
                </button>
                <Modal isOpen={modal} contentLabel='Modal' style={modalStyle}>
                  <h1>Well done!</h1>
                    <Modal isOpen={modal} contentLabel='Modal' style={modalStyle}>
                      <h1>Well done!</h1>
                      <Link to={activityRoute+1}><button className="button-radius repeat" onClick={() => dispatch({type: 'CLOSE_MODAL_RESET_SCORE'})}>Repeat</button></Link><br />
                      <Link to='activity'><button className="button-radius new-activity" onClick={() => dispatch({type: 'CLOSE_MODAL_RESET_SCORE'})}>Choose another activity</button></Link>
                    </Modal>
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
                  <audio ref={`${letter}`} >
                    <source src={`${letters[letter].soundFile}`} preload=''/>
                  </audio>
                </div>
              </div>
              <div className="row">
                <div className="columns" onClick={() => dispatch({type: 'INCREMENT_WRONGSOUNDS'})}>
                  <button onClick={() => this.playSound(letter)} className={`button radius`}>
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
          <div className="row">
            <div className="columns">
              <audio ref={`${letter}`} >
                <source src={`${letters[letter].soundFile}`} preload=''/>
              </audio>
            </div>
          </div>
          <div className="row">
            <div className="columns" onClick={() => dispatch({type: 'OPEN_MODAL'})}>
              <button onClick={() => this.playSound(letter)} className={`button radius`}>
                {letter}
              </button>
              <Modal isOpen={modal} contentLabel='Modal' style={modalStyle}>
                <h1>Right on!</h1>
                <Link to={activityRoute+(level+1)}><button className="button-radius repeat" onClick={() => dispatch({type: 'CLOSE_MODAL'})}>Next one!</button></Link><br />
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
                <audio ref={`${letter}`} >
                  <source src={`${letters[letter].soundFile}`} preload=''/>
                </audio>
              </div>
            </div>
            <div className="row">
              <div className="columns" onClick={() => dispatch({type: 'INCREMENT_WRONGSOUNDS'})}>
                <button onClick={() => this.playSound(letter)} className={`button radius`}>
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
    const modalStyle = {
      content:{
        top:'20%',
        left:'50%',
        right:'auto',
        bottom:'auto',
        marginRight:'-50%',
        transform:'translate(-50%, -50%)'
      }
    }

    if (level === 1) {
      return (
        <div>
          <div className="row">
            <h1>Listen ♫ Choose the right one!</h1>
          </div>
          <div className="playBox row align-spaced">
            <div className="row">
              <div className="columns">
                <h1>{this.generateAnswer(lettersArr, answer, letters)}</h1>
              </div>
            </div>
            {this.generateLetter(lettersArr, letters, answer)}
          </div>
        </div>
      )
    } else if (level === 5){
      return (
        <div>
          <div className="row">
            <h1>Listen ♫ Choose the right one!</h1>
          </div>
          <div className="playBox row align-spaced">
            <div className="row">
              <div className="columns">
                <h1>{this.generateAnswer(lettersArr, answer, letters)}</h1>
              </div>
            </div>
            {this.generateLetter(lettersArr, letters, answer)}
          </div>
        </div>
      )
    } else return (
      <div>
        <div className="row">
          <h1>Listen ♫ Choose the right one!</h1>
        </div>

        <div className="playBox row align-spaced">
          <div className="row">
            <div className="columns">
              <h1>{this.generateAnswer(lettersArr, answer, letters)}</h1>
            </div>
          </div>
          {this.generateLetter(lettersArr, letters, answer)}
        </div>
      </div>
    )
  }
}

module.exports = connect((state) => state)(PracticeSounds)
