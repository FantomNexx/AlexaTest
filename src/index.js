'use strict'

require('dotenv').config()

const express = require('express')
const alexa = require('alexa-app')

const PORT = process.env.PORT
const app = express()

// ALWAYS setup the alexa app and attach it to express before anything else.
const alexaApp = new alexa.app('/')

alexaApp.express({
  expressApp: app,
  checkCert: false,
  debug: true
})

// app.set("view engine", "ejs")

alexaApp.launch( (request, response) => {
  response.say('You launched the app!')
})

// alexaApp.dictionary = { "names": ["matt", "joe", "bob", "bill", "mary", "jane", "dawn"] }

alexaApp.intent('DenisHelloWorldIntent', {
    'utterances': ['hello', 'say hello', 'hello world']
  },
  (request, response) => {
    response.say('Hello for You too')
  }
)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})
