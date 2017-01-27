const test = require('tape')
const freeze = require('deep-freeze')
const reducer = require('../../src/reducer')
// 
// test('POST_NEW_USER | adds a new user', t => {
//
//   const state = {
//     showingPastNights: false,
//     dummyData: 42
//   }
//   freeze(state)
//
//   const expectedState = {
//     userName: "Anna",
//     email: "anna@me.com",
//     password:"happycat"
//   }
//
//   const action = {
//     type: 'POST_NEW_USER',
//     payload: {userName:"Anna",
//       email: "anna@me.com",
//       password: "happycat"
//     }
//   }
//
//   const newState = reducer(state, action)
//
//   t.deepEqual(expectedState, newState, 'should add newUser to newUser Field')
//
//   t.end()
// })
