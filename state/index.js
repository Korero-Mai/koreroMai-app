import { routerMiddleware, push } from 'react-router-redux'

module.exports = {

  editPlayer:'',

  scoreData : [],

  addPlayer: false,

  showWrong: false,

  editUser: false,

  playerToken: '',

  players: {
    players:[],
    group_name:""
  },

  users: {},

  modal: false,

  wrongSounds : 0,

  wrongWords: 0,

  letters: {
   A:{
     soundFile: '/sounds/a.mp3',
     imageFile: '/images/activity-images/aniwaniwa.png',
   },
   E:{
     soundFile: '/sounds/e.mp3',
     imageFile: '/images/activity-images/ekara.png',
   },
   H:{
     soundFile: '/sounds/h.mp3',
     imageFile: '/images/activity-images/hoiho.png',
   },
   K:{
     soundFile: '/sounds/k.mp3',
     imageFile: '/images/activity-images/koura.png',
   },
   M:{
     soundFile: '/sounds/m.mp3',
     imageFile: '/images/activity-images/maunga.png',
   },
   N:{
     soundFile: '/sounds/n.mp3',
     imageFile: '/images/activity-images/nanikoti.png',
   },
   Ng:{
     soundFile: '/sounds/ng.mp3',
     imageFile: '/images/activity-images/ngata.png',
   },
   O:{
     soundFile: '/sounds/o.mp3',
     imageFile: '/images/activity-images/oru.png',
   },
   P:{
     soundFile: '/sounds/p.mp3',
     imageFile: '/images/activity-images/purerehua.png',
   },
   R:{
     soundFile: '/sounds/r.mp3',
     imageFile: '/images/activity-images/ruru.png',
   },
   T:{
     soundFile: '/sounds/t.mp3',
     imageFile: '/images/activity-images/tamanuitera.png',
   },
   U:{
     soundFile: '/sounds/u.mp3',
     imageFile: '/images/activity-images/ua.png',
   },
   W:{
     soundFile: '/sounds/w.mp3',
     imageFile: '/images/activity-images/weta.png',
   },
   Wh:{
     soundFile: '/sounds/wh.mp3',
     imageFile: '/images/activity-images/whanau.png',
   },
   I:{
     soundFile: '/sounds/i.mp3',
     imageFile: '/images/activity-images/ika.png',
   }
  },

  learnSoundPage :{
     '1':['A','E','H'],
     '2':['K','M','N'],
     '3':['Ng','O','P'],
     '4':['R','T','U'],
     '5':['W','Wh','I']
  },

  practiceSoundPage:{
    '1':{
      letters: ['A','E','H'],
      answer: 'A'
    },
    '2':{
      letters: ['K','M','N'],
      answer: 'K'
    },
    '3':{
      letters: ['Ng','O','P'],
      answer: 'Ng'
    },
    '4':{
      letters: ['R','T','U'],
      answer: 'U'
    },
    '5':{
      letters: ['W','Wh','I'],
      answer: 'Wh'
    }
  },

  words: {
    āniwaniwa:{
      soundFile: '/sounds/aniwaniwa.mp3',
      imageFile: '/images/activity-images/aniwaniwa.png'
    },
    ēkara:{
      soundFile: '/sounds/ekara.mp3',
      imageFile: '/images/activity-images/ekara.png'
    },
    hōiho:{
      soundFile: '/sounds/hoiho.mp3',
      imageFile: '/images/activity-images/hoiho.png'
    },
    kōura:{
      soundFile: '/sounds/koura.mp3',
      imageFile: '/images/activity-images/koura.png'
    },
    maunga:{
      soundFile: '/sounds/maunga.mp3',
      imageFile: '/images/activity-images/maunga.png'
    },
    noke:{
      soundFile: '/sounds/noke.mp3',
      imageFile: '/images/activity-images/noke.png'
    },
    ngata:{
      soundFile: '/sounds/ngata.mp3',
      imageFile: '/images/activity-images/ngata.png'
    },
    oru:{
      soundFile: '/sounds/oru.mp3',
      imageFile: '/images/activity-images/oru.png'
    },
    pūrerehua:{
      soundFile: '/sounds/purerehua.mp3',
      imageFile: '/images/activity-images/purerehua.png'
    },
    ruru:{
      soundFile: '/sounds/ruru.mp3',
      imageFile: '/images/activity-images/ruru.png'
    },
    Tamanuiterā:{
      soundFile: '/sounds/tamanuitera.mp3',
      imageFile: '/images/activity-images/tamanuitera.png'
    },
    ua:{
      soundFile: '/sounds/ua.mp3',
      imageFile: '/images/activity-images/ua.png'
    },
    wētā:{
      soundFile: '/sounds/weta.mp3',
      imageFile: '/images/activity-images/weta.png'

    },
    whānau:{
      soundFile: '/sounds/whanau.mp3',
      imageFile: '/images/activity-images/whanau.png'
    },
    ika:{
      soundFile: '/sounds/ika.mp3',
      imageFile: '/images/activity-images/ika.png'
    }
  },

  learnWordPage:{
       '1':['āniwaniwa','ēkara','hōiho'],
       '2':['kōura','maunga','noke'],
       '3':['ngata','oru','pūrerehua'],
       '4':['ruru','Tamanuiterā','ua'],
       '5':['wētā','whānau','ika']
  },

  practiceWordPage:{
    '1':{
      words: ['āniwaniwa','ēkara','hōiho'],
      answer: 'āniwaniwa'
    },
    '2':{
      words: ['kōura','maunga','noke'],
      answer: 'kōura'
    },
    '3':{
      words: ['ngata','oru','pūrerehua'],
      answer: 'ngata'
    },
    '4':{
      words: ['ruru','Tamanuiterā','ua'],
      answer: 'ua'
    },
    '5':{
      words: ['wētā','whānau','ika'],
      answer: 'whānau'
    }
  },



}
