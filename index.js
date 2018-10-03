const { RTMClient, WebClient } = require("@slack/client");
const env = require("node-env-file");
const schedule = require("node-schedule");
env(__dirname + "/.env");
const token =  process.env.SLACK_TOKEN;
const web = new WebClient(token);
const rtm = new RTMClient(token);


let channelID = "";

rtm.start();

web.channels.list().then(res => {
  let channel;
  res.channels.forEach(e => {
    if (e.is_member) channelID = e.id;
  });

  rtm.sendMessage("Who wants to have lunch in the best place of the world?", channelID);
  rtm.on('message', (event) => {
    let msg = event.text;
    console.log(msg)
    if(msg == 'chicote start') {
      rtm.sendMessage('Ey! Who is going to have lunch out today?', channelID)
    } else if(msg == 'chicote stop') {
      rtm.sendMessage('I Dont want to leave', channelID)
    }
  })
});
