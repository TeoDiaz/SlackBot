const Leaders = require("../models/Leader");

class Actions {
  constructor() {
    this.rtm = {};
    this.channel = "";
    this.usersArr = [];
    this.numOfUsers = 0;
    this.groupsArr = [];
    this.leadersArr = [];
  }

  readMessage(e, rtm, channel) {
    const message = e.text;

    this.rtm = rtm;
    this.channel = channel;

    if (message.includes("yes")) {
      this.addUsers(e);
    }
  }

  userExists(user) {
    return this.usersArr.includes(user);
  }

  getCeilNum(num) {
    return Math.ceil(this.numOfUsers / num);
  }

  shuffleArray() {
    this.usersArr.sort(() => Math.random() - 0.5);
  }

  getLeaders() {
    this.leadersArr = this.groupsArr.map(e => e[0]);
    this.createDB(this.leadersArr);
  }

  createGroups(groupNum, usersPerGroup) {
    for (let i = 0; i < groupNum; i++)
      this.groupsArr.push(this.usersArr.splice(0, usersPerGroup));
  }

  createDB(ele) {
    ele.map(e => {
      let newLeader = {
        name: e
      };
      Leaders.create(newLeader)
        .then(() => {
          console.log("Creado");
        })
        .catch(e => console.log(e));
    });
  }

  resetLists() {
    this.numOfUsers = 0;
    this.usersArr = [];
    this.arrGroups = [];
  }

  addUsers(e) {
    if (this.userExists(e.user)) {
      this.rtm.sendMessage(
        "<@" + e.user + "> keep calm, you are already in for lunch",
        this.channel
      );
    } else if (!this.userExists(e.user)) {
      this.usersArr.push(e.user);
      this.rtm.sendMessage(
        "Yeah <@" + e.user + "> is in! :the_horns:",
        this.channel
      );
    }
  }

  usersGroups(maxNumber) {
    this.numOfUsers = this.usersArr.length;
    this.shuffleArray();

    const numGroups = this.getCeilNum(maxNumber);
    const usersPerGroup = this.getCeilNum(numGroups);
    const smallGroupCount = usersPerGroup * numGroups - this.numOfUsers;
    const bigGroupCount = numGroups - smallGroupCount;

    this.createGroups(bigGroupCount, usersPerGroup);

    if (this.numOfUsers > 7 && smallGroupCount > 0) {
      this.createGroups(smallGroupCount, usersPerGroup - 1);
    }
  }

  showGroups() {
    this.groupsArr.forEach((e, i) => {
      e = e.map(e => `<@${e}>`);
      this.rtm.sendMessage(
        `Group ${i + 1}: ${e} Today the Leader is: <@${this.leadersArr[i]}>`,
        this.channel
      );
    });
    this.resetLists();
  }

  chooseLeader() {
    this.getLeaders();
    this.showGroups();
  }
}

module.exports = Actions;
