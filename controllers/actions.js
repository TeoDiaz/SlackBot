class Actions {
  constructor() {
    this.rtm = {};
    this.channel = "";
    this.usersArr = [];
    this.usersInArr = 0;
    this.groupsArr = [];
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
    this.usersArr.sort(() => Math.random() - 0.5);
  }

  createGroups(groupNum, usersPerGroup) {
    for (let i = 0; i < groupNum; i++)
      this.arrGroups.push(this.usersArr.splice(0, usersPerGroup));
  }

  addUsers(e) {
    this.usersArr.push(e.user);
    this.rtm
      .sendMessage("Yeah <@" + e.user + "> is in! :the_horns:", this.channel)
      .then(res => {
        this.usersGroups(7);
      })
      .catch(err => console.log("status", err));
  }

  usersGroups(maxNumber) {
    this.usersInArr = this.usersArr.length;
    this.shuffleArray();
    const numGroups = this.getCeilNum(maxNumber);
    const usersPerGroup = this.getCeilNum(numGroups);
    const smallGroupCount = usersInGroup * numGroups - this.usersInArr;
    const bigGroupCount = numGroups - smallGroupCount;
    this.createGroups(bigGroupcount, usersPerGroup);
  }
}

module.exports = Actions;
