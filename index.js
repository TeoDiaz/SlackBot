const { RTMClient, WebClient } = require("@slack/client");
const env = require("node-env-file");
const schedule = require("node-schedule");
env(__dirname + "/.env");
const token =  process.env.SLACK_TOKEN;
const web = new WebClient(token);
const rtm = new RTMClient(token);

console.log(token)

let channelID = "";

rtm.start();

web.channels.list().then(res => {
  let channel;
  res.channels.forEach(e => {
    if (e.is_member) channelID = e.id;
  });

  rtm.sendMessage("Who wants to have lunch in the best place of the world? ", channelID);
  
});
