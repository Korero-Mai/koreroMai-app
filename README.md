#Korero Mai!

![Home page](/documentation/koreromai_home.png)

This app is intended to be used as a tool to help children 5 and 6 get acquainted with Te reo. It focuses on learning pronounciation and simple words through two main types of activities :
* "Learn the pronounciation" : click on the letters or words to hear their proper pronounciation.
![Learn](/documentation/koreromai_learnsounds.png)

* "Practice your learning" : click on "Listen" to hear a letter or word, then choose the right one below.
![Practice](/documentation/koreromai_practicewords.png)

Learn more about the features in documentation.md

This repository holds the source code of the [Korero Mai App](korero-mai.herokuapp.com),
the foundation for most of the documentation.


## Prerequisites


Node.js and npm are essential to run this App on your machine.


<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.


**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.

## Install

Clone this repo into new project folder (e.g., `my-proj`).
```shell
git clone https://github.com/Korero-Mai/koreroMai-app  my-proj
cd my-proj
npm install
```

## Start development server on local host
Without nodemon :
```
npm start
```
With nodemon : 
````
npm run dev
````
Live reloading app at `http://localhost:3000/`

## Deploy

```
npm run deploy
```
