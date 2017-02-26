const React = require('react')
const { connect } = require('react-redux')

function GenerateLetter(props) {
  return (
      lettersArr.map((letter, index) => {
        if (letter === answer) {
          return (
            <div>
              <div className='row'>
                <div className='columns'>
                  <audio ref={`${letter}`} >
                    <source src={`${letters[letter].soundFile}`} preload='auto'/>
                  </audio>
                </div>
              </div>
              <div className='row'>
                <div className='columns'>
                  <button onClick={() => this.playSound(letter)} className={`button radius`}>
                    {letter}
                  </button>
                </div>
              </div>
            </div>
          )
        } else {
            return (
              <div>
                <div className='row'>
                  <div className='columns'>
                    <audio ref={`${letter}`} >
                      <source src={`${letters[letter].soundFile}`} preload='auto'/>
                    </audio>
                  </div>
                </div>
                <div className='row'>
                  <div className='columns' onClick={() => dispatch({type: 'INCREMENT_WRONGLETTERS'})}>
                    <button onClick={() => this.playSound(letter)} className={`button radius`}>
                      {letter}
                    </button>
                  </div>
                </div>
              </div>
            )
          }
      })
  )
}

module.exports = connect((state) => state)(GenerateLetter)
