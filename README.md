# Drink-Splitter
Drink Splitter

#State

This is a prototype of a state that could be used for all the client side stuff with React and Redux. There are two big blocks in it :

- everything under the `currentNight` key is the state used on the "Night Out" view. The most notable thing is the `payer` key. 

- everything else is data about the current user, which will be used for the "My Profile" page

It is only a guideline based on the observation of the current mockups and trying to predict the data we'd need. You'll probably corrupt it with your dark and crafty minds. Which I'll applaud.

const state =

  loggedInUserId: 1,
  name: Lucas,
  totalOwed: 500,
  totalOwing: 0,
  pastNights: {
    1: {
      night_id: 1,
      name_id: 1,
      name: 'Lucas',
      amountOwing: 0
    },
    2: {
      night_id: 2,
      name_id: 2,
      name: 'Rodrigo',
      amountOwing: 500
    }
  },

  currentNight: {
    night_id: 1,
    night_date: '10/10/2016',
    group_total: 1000,
    users: {
      1: {
        id: 1,
        name: 'Lucas',
        payer: true,
        amountToPay: 0,
      },
      2: {
        id: 2,
        name: 'Rodrigo',
        payer: false,
        amountToPay: 500,
      }
    }
  }
}
