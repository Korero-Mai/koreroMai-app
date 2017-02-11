const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const Modal = require('react-modal');

class LearnWords extends React.Component {

  componentWillMount() {
    Modal.setAppElement('body');
  }

  playSound(index) {
    this.refs[index].load()
    this.refs[index].play()
  }

  generateWord(wordsArr,words){
      return wordsArr.map((word,index)=>{
        return (
          <div className='row'>
            <div className='colums small-centered small-12 medium-6 large-4'>
              <audio ref={`${index}`} >
                <source src={`${words[word].soundFile}`} preload=''/>
              </audio>
              <img src={`${words[word].imageFile}`} />
              <button onClick={() => this.playSound(index)} className={`button-radius`}>
                {word}
              </button>
          </div>
        </div>
        )
      })
    }

    render() {
      const props = this.props
      const { dispatch, modal, words } = this.props
      const level = Number(this.props.params.id)
      const activityRoute = 'activity/learn/words/'
      const wordsArr = this.props.learnWordPage[level]
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
            <h1>Learn how to pronounce Te Reo !</h1>
            <div className="playBox">
              {this.generateWord(wordsArr, words)}
              <div className='row'>
                <div className='colums small-centered small-10 medium-6 large-4'>
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
            <h1>Learn how to pronounce Te Reo !</h1>
              <div className="playBox">
                {this.generateWord(wordsArr, words)}
                <div>
                  <Link to={activityRoute+(level-1)}><button className="last-back">Back</button></Link>
                  <button className="finish" onClick={() => dispatch({type: 'OPEN_MODAL'})}>Finish!</button>
                  <Modal isOpen={modal} contentLabel='Modal' style={modalStyle}>
                    <h1>Well done!</h1>
                    <Link to={activityRoute+1}><button className="button-radius repeat" onClick={() => dispatch({type: 'CLOSE_MODAL'})}>Repeat</button></Link><br />
                    <Link to='activity'><button className="button-radius new-activity" onClick={() => dispatch({type: 'CLOSE_MODAL'})}>Choose another activity</button></Link>
                  </Modal>
                </div>
              </div>
            </div>
        )
      } else return (
        <div>
          <h1>Learn how to pronounce Te Reo !</h1>
          <div>
            <div className="playBox">
              {this.generateWord(wordsArr, words)}
            </div>
            <div className='row'>
              <div className='colums small-centered small-10 medium-6 large-4'>
                <Link to={activityRoute+(level-1)}><button className="nav-back">Back</button></Link>
                <Link to={activityRoute+(level+1)}><button className="nav-next">Next</button></Link>
              </div>
            </div>
          </div>
        </div>
      )
    }
}
    module.exports = connect((state) => state)(LearnWords)
