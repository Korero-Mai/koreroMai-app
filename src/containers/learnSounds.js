const React = require('react')
const { connect } = require('react-redux')

function LearnSounds(props) {
console.log('learnSounds props',props)
  const lettersArr = props.learnSoundPage[props.params.id]
  console.log('lettersArr', lettersArr);
  const lettersObj = props.letters
  return (
      <div className="playBox">
        {generateLetter(lettersArr,lettersObj)}
        <div>
          <button className="button radius">Back</button>
          <button className="button radius">next</button>
        </div>
      </div>
    )
}

module.exports = connect((state) => state)(LearnSounds)

function generateLetter(lettersArr,lettersObj){
    return lettersArr.map((letter,index)=>{
      return (
        <div>
          <img src={`${lettersObj[letter].imageFile}`}/>
          <button className={`button radius letter${index+1}Position`}>{letter}</button>
        </div>
      )
    })
}
