const React = require('react')
const { connect } = require('react-redux')

class LearnSounds extends React.Component {

  playSound() {
    console.log(this.refs)
    console.log(this.refs)
    return this.refs.sound.play()
  }

  generateLetter(lettersArr,lettersObj){
      return lettersArr.map((letter,index)=>{
        return (
          <div>
            <audio ref="sound">
              <source src={`${lettersObj[letter].soundFile}`} type="audio/mpeg" preload=''/>
            </audio>
            <img src={`${lettersObj[letter].imageFile}`}/>
            <button onClick={this.playSound.bind(this)} className='button radius'>
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
