class Actions {
  constructor() {
    this.rtm = {};
    this.channel = "";
    this.arrUsers = [];
  }
  
  readMessage(e, rtm, channel) {
    const message = e.text;

    this.rtm = rtm;
    this.channel = channel;

    if (message.includes("yes")) {
      this.addUsers(e)
    } else if (message.includes("no more")) {
      this.rtm.sendMessage("Goodbye Folks!", this.channel);
    }
  }


  addUsers(e) {
      this.arrUsers.push(e.user);
      console.log(this.arrUsers)
      this.rtm.sendMessage(" Yeah <@"+e.user+'> is in! :the_horns:', this.channel);
  }

}

module.exports = Actions;
