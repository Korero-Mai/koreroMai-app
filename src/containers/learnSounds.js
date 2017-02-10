const React = require('react')
const { connect } = require('react-redux')

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
    const lettersArr = this.props.learnSoundPage[this.props.params.id]
    const lettersObj = this.props.letters

    console.log(this.props);

    return (
        <div className="playBox">
          {this.generateLetter(lettersArr, lettersObj, props)}
          <div>
            <button className="button radius">Back</button>
            <button className="button radius">next</button>
          </div>
        </div>
    )

  }
}

module.exports = connect((state) => state)(LearnSounds)
