env(__dirname + '/.env')

const {RTMClient, WebClient} = require('@slack/client')
const env = require('node-env-file')
const schedule = require('node-schedule')
const token = process.env.TOKEN
const web = new WebClient(token)
const rtm = new RTMClient(token)
