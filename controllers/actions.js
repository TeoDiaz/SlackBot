class Actions {
  constructor() {
    this.rtm = {};
    this.channel = "";
    this.arrUsers = [];
    this.usersInArr = 0;
  }

  readMessage(e, rtm, channel) {
    const message = e.text;

    this.rtm = rtm;
    this.channel = channel;

    if (message.includes("yes")) {
      this.addUsers(e);
    } else if (message.includes("no more")) {
      this.rtm.sendMessage("Goodbye Folks!", this.channel);
    }
  }

  getCeilNum(num) {
    return Math.ceil(this.usersInArr / num);
  }

  shuffleArray() {
    this.arrUsers.sort(() => Math.random() - 0.5);
  }

  addUsers(e) {
    this.arrUsers.push(e.user);
    this.rtm
      .sendMessage("Yeah <@" + e.user + "> is in! :the_horns:", this.channel)
      .then(res => {
        this.usersGroups(7);
      })
      .catch(err => console.log("status", err));
  }

  usersGroups(maxNumber) {
    this.usersInArr = this.arrUsers.length;
    this.shuffleArray();
    const numGroups = this.getCeilNum(maxNumber);
    const usersPerGroup = this.getCeilNum(numGroups);
    const smallGroup = (usersInGroup * numGroups) - this.usersInArr;
  }
}

module.exports = Actions;
