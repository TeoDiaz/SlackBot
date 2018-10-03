const { RTMClient, WebClient } = require("@slack/client");
const env = require("node-env-file");
const schedule = require("node-schedule");
env(__dirname + "/.env");
const token =  process.env.SLACK_TOKEN;
const web = new WebClient(token);
const rtm = new RTMClient(token);


let channelID = "";
let startAsk = {hour: 10, minute: 30, dayOfWeek: 5}
let stopAsk = {hour: 12, minute: 30, dayOfWeek: 5}

rtm.start();

web.channels.list().then(res => {
  res.channels.forEach(e => {
    if (e.is_member) channelID = e.id;
  });

  schedule.scheduleJob(startAsk, () => {
    rtm.sendMessage("Hello Buddies! Who wants to go out for lunch? Make me know just saying 'me'.", channelID)
    rtm.on('message', (event) => {
      let message = event.text;
      if(message == "me"){
        rtm.sendMessage("Yeah! :the_horns:", channelID)
      }
    })
  })
});
