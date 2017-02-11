const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

class LearnSounds extends React.Component {

  playSound(index) {
    return this.refs[index].play()
  }

  generateLetter(lettersArr,lettersObj){
      return lettersArr.map((letter,index)=>{
        return (
          <div>
            <audio ref={`${index}`} >
              <source src={`${lettersObj[letter].soundFile}`} preload=''/>
            </audio>
            <img src={`${lettersObj[letter].imageFile}`}/>
            <button onClick={() => this.playSound(index)} className={`button radius`}>
              {letter}
            </button>
          </div>
        )
      })
    }

  render() {
    const props = this.props
    const { dispatch } = this.props
    const level = Number(this.props.params.id)
    const activityRoute = 'activity/learn/sounds/'
    const lettersArr = this.props.learnSoundPage[level]
    const lettersObj = this.props.letters

    if (level === 1) {
      return (
          <div className="playBox">
            {this.generateLetter(lettersArr, lettersObj, props)}
            <div>
              <Link to='activity'><button className="button radius">Back</button></Link>
              <Link to={activityRoute+(level+1)}><button className="button radius">Next</button></Link>
            </div>
          </div>
      )
    } else if (level === 5){
      return (
          <div className="playBox">
            {this.generateLetter(lettersArr, lettersObj, props)}
            <div>
              <Link to={activityRoute+(level-1)}><button className="button radius">Back</button></Link>
              <Link to='activity'><button className="button radius">Next</button></Link>
            </div>
          </div>
      )
    } else return (
      <div className="playBox">
        {this.generateLetter(lettersArr, lettersObj, props)}
        <div>
          <Link to={activityRoute+(level-1)}><button className="button radius">Back</button></Link>
          <Link to={activityRoute+(level+1)}><button className="button radius">Next</button></Link>
        </div>
      </div>
    )
  }
}

module.exports = connect((state) => state)(LearnSounds)
