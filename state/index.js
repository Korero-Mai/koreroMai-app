import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, push } from 'react-router-redux'

module.exports = {
  situation: null,
  inventory: {
    gold: 0
  },
  steps : {
      11: {
        text: "You see a stick on the ground",
        button1: "Take it",
        button2: "Leave it",
        button1Action: {type:'GET_STICK', situation: 21},
        button2Action: {type:'SKIP_STICK', situation: 22}
      },
      21: {
        text: "An evil chicken bar your way",
        button1: "Hit it with the stick",
        button2: "Attempt to reason with it",
        button1Action: push('/end'),
        button2Action: push('/end')
      },
      22: {
        text: "An evil chicken bar your way",
        button1: "Sing it a song",
        button2: "Attempt to reason with it",
        button1Action: push('/end'),
        button2Action: push('/end')
      }
  }
}
