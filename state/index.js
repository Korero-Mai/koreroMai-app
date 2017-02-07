import { routerMiddleware, push } from 'react-router-redux'

module.exports = {
  situation: null,
  end: null,
  score: 0,
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
        button1Action: {type:'SET_END', end: 2},
        button2Action: {type:'SET_END', end: 1}
      },
      22: {
        text: "An evil chicken bar your way",
        button1: "Sing it a song",
        button2: "Attempt to reason with it",
        button1Action: {type:'SET_END', end: 1},
        button2Action: {type:'SET_END', end: 1}
      },
      1: {
        endText: "You get pecked to death. In this world, it's kill or be killed.",
        endButton: "How terrible were you?",
        endButtonAction: push('/end')
      },
      2: {
        endText: "You bravely stick the chicken to death! You monster.",
        endButton: "Hit the highscore?",
        endButtonAction: push('/end')
      }
  }
}
