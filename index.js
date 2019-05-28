//COOKIES

//need to use express
const express = require('express')

//need to use express-session
const session = require('express-session')

//create an app
const app = express()

app.use(session({
    secret: 'SunnyB3aches',
    resave: false,
    saveUninitialized: true
}))

app.use((req, res, next) => {
    if (!req.session.counter) req.session.counter = 0
    console.log('counter', ++req.session.counter) // increment THEN log
    next() // needed to continue through express middleware
  });

  app.use((req, res, next) => {
    console.log('SESSION: ', req.session)
    next()
  })

app.get('/', (req, res, next) => {
    res.send('Welcome to the Jungle')
})

app.listen(8080, () => console.log('listening at http://localhost:8080'))