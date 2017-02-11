import { routerMiddleware, push } from 'react-router-redux'

module.exports = {

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

  activity : {},

  modal: false,

  words: {
    anuhe:{
      soundFile: '/sounds/anuhe.mp3',
      imageFile: '/images/activity-images/anuhe.png'
    },
    aporo:{
      soundFile: '/sounds/aporo.mp3',
      imageFile: '/images/activity-images/aporo.png'
    },
    aniwaniwa:{
      soundFile: '/sounds/aniwaniwa.mp3',
      imageFile: '/images/activity-images/aniwaniwa.png'
    },
    ekara:{
      soundFile: '/sounds/ekara.mp3',
      imageFile: '/images/activity-images/ekara.png'
    },
    hoiho:{
      soundFile: '/sounds/hoiho.mp3',
      imageFile: '/images/activity-images/hoiho.png'
    },
    heki:{
      soundFile: '/sounds/heki.mp3',
      imageFile: '/images/activity-images/heki.png'
    },
    harakeke:{
      soundFile: '/sounds/harakeke.mp3',
      imageFile: '/images/activity-images/harakeke.png'
    },
    koura:{
      soundFile: '/sounds/koura.mp3',
      imageFile: '/images/activity-images/koura.png'
    },
    kanga:{
      soundFile: '/sounds/kanga.mp3',
      imageFile: '/images/activity-images/kanga.png'
    },
    moana:{
      soundFile: '/sounds/moana.mp3',
      imageFile: '/images/activity-images/moana.png'
    },
    maunga:{
      soundFile: '/sounds/maunga.mp3',
      imageFile: '/images/activity-images/maunga.png'
    },
    noke:{
      soundFile: '/sounds/noke.mp3',
      imageFile: '/images/activity-images/noke.png'
    },
    nanikoti:{
      soundFile: '/sounds/nanikoti.mp3',
      imageFile: '/images/activity-images/nanikoti.png'
    },
    ngata:{
      soundFile: '/sounds/ngata.mp3',
      imageFile: '/images/activity-images/ngata.png'
    },
    oru:{
      soundFile: '/sounds/oru.mp3',
      imageFile: '/images/activity-images/oru.png'
    },
    ono:{
      soundFile: '/sounds/ono.mp3',
      imageFile: '/images/activity-images/ono.png'
    },
    popokorua:{
      soundFile: '/sounds/popokorua.mp3',
      imageFile: '/images/activity-images/popokorua.png'
    },
    purerehua:{
      soundFile: '/sounds/purerehua.mp3',
      imageFile: '/images/activity-images/purerehua.png'
    },
    pungawerewere:{
      soundFile: '/sounds/pungawerewere.mp3',
      imageFile: '/images/activity-images/pungawerewere.png'
    },
    ranginui:{
      soundFile: '/sounds/ranginui.mp3',
      imageFile: '/images/activity-images/ranginui.png'
    },
    ruru:{
      soundFile: '/sounds/ruru.mp3',
      imageFile: '/images/activity-images/ruru.png'
    },
    tanemahuta:{
      soundFile: '/sounds/tanemahuta.mp3',
      imageFile: '/images/activity-images/tanemahuta.png'
    },
    tamanuitera:{
      soundFile: '/sounds/tamanuitera.mp3',
      imageFile: '/images/activity-images/tamanuitera.png'
    },
    ua:{
      soundFile: '/sounds/ua.mp3',
      imageFile: '/images/activity-images/ua.png'
    },
    weta:{
      soundFile: '/sounds/weta.mp3',
      imageFile: '/images/activity-images/weta.png'

    },
    wai:{
      soundFile: '/sounds/wai.mp3',
      imageFile: '/images/activity-images/wai.png'
    },
    whanau:{
      soundFile: '/sounds/whanau.mp3',
      imageFile: '/images/activity-images/whanau.png'
    },
    ika:{
      soundFile: '/sounds/ika.mp3',
      imageFile: '/images/activity-images/ika.png'
    }
  },

  learnWordPage :{
       '1':['aniwaniwa','ekara','hoiho'],
       '2':['koura','maunga','noke'],
       '3':['ngata','oru','purerehua'],
       '4':['ruru','tamanuitera','ua'],
       '5':['weta','whanau','ika']
  },

  activity : {
  },

  modal: false,

  wrongSounds : 0

}
