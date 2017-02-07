const React = require('react')
const { connect } = require('react-redux')
const _ = require('lodash')

function Adventure(props) {
  const situation = props.situation
  const inventory = props.inventory
  const end = props.end
  const { text, button1, button2, button1Action, button2Action } = props.steps[situation]
  const inventoryBox = _.map(inventory, (value, key) => {
    if (typeof(value) === 'number'){
      return <div>{key} : {value}</div>
    } else if (!value){
      return
    } else {
      return  <div>{key}</div>
    }
  })

  if(end){
    const { endText, endButton, endButtonAction} = props.steps[end]
    return (
      <div>
        <h1>Adventure</h1>
        <p>{endText}</p>
        <button onClick={() => props.dispatch(endButtonAction)}>{endButton}</button>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Adventure</h1>
        <p>{text}</p>
        <button onClick={() => props.dispatch(button1Action)}>{button1}</button>
        <button onClick={() => props.dispatch(button2Action)}>{button2}</button>
        <br />
        <br />
        <div>
          Inventory :
          {inventoryBox}
        </div>
      </div>
    )
  }
}

module.exports = connect((state) => state)(Adventure)

// WHY DOES THIS NOT WORK
// {_.forEach(inventory, (value, key) => {
//   if (typeof(value) === 'number'){
//     return key + ': ' + value
//   } else {
//     return key
//   }
// })
// }

