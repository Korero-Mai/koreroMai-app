const React = require('react')
const { connect } = require('react-redux')

class LearnSounds extends React.Component {

  handleClick() {

    const { dispatch } = this.props

    // const email = this.refs.email.value
    const lettersArr = props.learnSoundPage[props.params.id]
    const lettersObj = props.letters

    function playSound() {
      const sound = this.refs.gong.value
      console.log('sound', sound);
    }

    function generateLetter(lettersArr,lettersObj, props){
      console.log('learnSounds props',props)
      return lettersArr.map((letter,index)=>{
        return (
          <div>
          <audio ref="gong">
          <source src={`${lettersObj[letter].soundFile}`} type="audio/mpeg" />
          </audio>

          <img src={`${lettersObj[letter].imageFile}`}/>
          <button onClick={this.playSound.bind(this)} className={`button radius letter${index+1}Position`}>
          {letter}
          </button>

          </div>
        )
      })
    }
  }

  render() {
    const { dispatch } = this.props

    return (
        <div className="playBox">
          {generateLetter(lettersArr, lettersObj, props)}
          <div>
            <button className="button radius">Back</button>
            <button className="button radius">next</button>
          </div>
        </div>
    )

  }

module.exports = connect((state) => state)(LearnSounds)
