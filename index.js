const { RTMClient, WebClient } = require("@slack/client");
const env = require("node-env-file");
const schedule = require("node-schedule");
const token = "MYTOKEN";
const web = new WebClient(token);
const rtm = new RTMClient(token);

env(__dirname + "/.env");

let channelID = "";

rtm.start();

web.channels.list().then(res => {
  let channel;
  res.channels.forEach(e => {
    if (e.is_member) channelID = e.id;
  });

  rtm.sendMessage("Who wants to have lunch in the best place of the world? ", channelID);
  
});
