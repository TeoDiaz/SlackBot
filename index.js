const { RTMClient, WebClient } = require("@slack/client");
const env = require("node-env-file");
const schedule = require("node-schedule");
env(__dirname + "/.env");
const token = process.env.TOKEN;
const web = new WebClient(token);
const rtm = new RTMClient(token);
const Actions = require("./controllers/actions");
const botFunction = new Actions();

let channelID = "";
let startAsk = {hour: 10, minute: 30, dayOfWeek: 5}
let stopAsk = {hour: 12, minute: 30, dayOfWeek: 5}

rtm.start();

web.channels.list().then(res => {
  res.channels.forEach(e => {
    if (e.is_member) channelID = e.id;
  });

  schedule.scheduleJob(startAsk, () => {
    rtm.sendMessage("Hello Buddies! Who wants to go out for lunch? Make me know just saying 'yes'.", channelID);
    rtm.on("message", event => {
      botFunction.readMessage(event, rtm, channelID);
    });
  })
  schedule.scheduleJob(stopAsk, () =>{
      rtm.sendMessage("Buddies, time is over, this are the groups",channelID)
      botFunction.usersGroups(7);
      botFunction.chooseLeader();
  })
})

