import { routerMiddleware, push } from 'react-router-redux'

module.exports = {
 letters: {
   hi:{
     soundFile: '/sounds/moana.mp3',
     imageFile: '/images/activity-images/aniwaniwa.png',
   },
   te:{
     soundFile: 'mp3',
     imageFile: '/images/activity-images/taneMahuta.png',
   },
   ka:{
     soundFile: 'mp3ka',
     imageFile: 'img',
   },
   me:{
     soundFile: 'mp3',
     imageFile: 'img',
   },
   he:{
     soundFile: 'mp3',
     imageFile: 'img',
   },
   ph:{
     soundFile: 'mp3',
     imageFile: 'img',
   }
 },
 learnSoundPage :{
     '1':['hi','te','ka'],
     '2':['me','he','ph'],
     '3':['ka','hi','te'],
     '4':['ph','me','te'],
     '5':['hi','me','ph']
   },
  activity : {
  }

}
