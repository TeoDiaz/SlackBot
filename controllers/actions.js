class Actions {
  constructor() {
    this.rtm = {};
    this.channel = "";
  }

  readMessage(e, rtm, channel) {
    const message = e.text;

    this.rtm = rtm;
    this.channel = channel;

    if (message.includes("yes")) {
      rtm.sendMessage("Yeah! :the_horns:", channel);
    } else if (message.includes("no more")) {
      rtm.sendMessage("Goodbye Folks!", channel);
    }
  }
}

module.exports = Actions;
