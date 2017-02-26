# Korero Mai
* This app is intended to be used as a tool to help children 5 and 6 get acquainted with Te reo. It focuses on learning pronounciation and simple words through two main types of activities :
- "Learn the pronounciation" : click on the letters or words to hear their proper pronounciation.
- "Practice your learning" : click on "Listen" to hear a letter or word, then choose the right one below.
* You do not need to register to use the app : all the activities are open to free play. You can however leverage more options by registering / logging in as on of two types of users.
* The two different types of users are :
  - the "teacher" can create an admin account and log into it. he has a "profile page" where he can manage his "pupils" (create, assign to group, follow their scores' trends)
  - the "pupil" can login with the "token" assigned to them by the "teacher". Once logged in, their score in the "practice" activities will be recorded and available to the "teacher" on their "profile page".


## Programming
* This app was developed using javascript by making use of node, npm modules, react, redux, and sass.


#### Tables
* The following tables form part of the database setup.
* Users = teachers database
* Players = student database
* Game scores = record of the various games that was played
* and a join table to join the users with the players

### DB methods
db.addUser, returns:  [ { id: 4, username: 'Anna', email: '', password: '' } ]

db.findUserByEmail, returns: [ { id: 1,
    username: 'anna',
    email: 'anna@anna.com',
    password: '$2a$10$st5Yp1EDwl/2R' } ]

db.findUserByEmail, returns: []

db.addPlayer, returns: { user: { id: 3, username: 'Lucas Tonini', email: 'lucas@lucas.com' },
  player:
   { id_player: 6,
     player_name: 'Joyce',
     player_token: 'joyce123',
     prac_letters_total_wrong: null,
     prac_words_total_wrong: null,
     group_name: 'group2' } }

db.addPlayer, returns: []

db.addScore, returns:   [ { id_game: 9,
    player_id: 2,
    prac_letters_wrong: 4,
    prac_letters_timestamp: '2017-02-12 22:55:32',
    prac_words_wrong: 5,
    prac_words_timestamp: '2017-02-12 22:55:32' } ]

db.findPlayersByUser, returns: { user:
 { id: 1,
   username: 'anna',
   email: 'anna@anna.com',
   password: '$2a$10$st5YpO' },
players:
 [ { id_player: 1,
     player_name: 'Annie',
     player_token: 'annie123',
     prac_letters_total_wrong: 7,
     prac_words_total_wrong: 6,
     group_name: 'group1' },
   { id_player: 2,
     player_name: 'Bobbie',
     player_token: 'bobbie123',
     prac_letters_total_wrong: 1,
     prac_words_total_wrong: 2,
     group_name: 'group1' },
   { id_player: 3,
     player_name: 'Candis',
     player_token: 'candis123',
     prac_letters_total_wrong: 3,
     prac_words_total_wrong: 6,
     group_name: 'group1' },
   { id_player: 4,
     player_name: 'Jimmie',
     player_token: 'jimmie123',
     prac_letters_total_wrong: 1,
     prac_words_total_wrong: 15,
     group_name: 'group2' },
   { id_player: 5,
     player_name: 'Phil',
     player_token: 'phil123',
     prac_letters_total_wrong: 2,
     prac_words_total_wrong: 3,
     group_name: 'group2' } ] }

db.findSelectedPlayerData, returns: [ { id_player: 1,
   player_name: 'Annie',
   player_token: 'annie123',
   prac_letters_total_wrong: 7,
   prac_words_total_wrong: 6,
   group_name: 'group1' } ]
