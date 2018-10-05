const Actions = require('../controllers/actions');

let actions;

beforeEach(() => {
  actions = new Actions();
});

test('userExist() must be defined', () =>{
  expect(actions.userExists()).toBeDefined()
})

test('if there is no iqual name return false', () => {
  expect(actions.userExists("Batman")).toBeFalsy;
});

test('if there is an iqual name return true', () => {
  actions.usersArr.push('Batman');
  expect(actions.userExists('Batman')).toBeTruthy;
});

test('getCeilNum() must be defined', () =>{
  expect(actions.getCeilNum()).toBeDefined()
})

test('return smallest integer greater than or equal to a given number', () => {
  actions.numOfUsers = 10;
  expect(actions.getCeilNum(3)).toEqual(4);
})

test('shuffleArray() must be defined', () => {
  expect(actions.shuffleArray).toBeDefined()
})

test('shuffle an array', () => {
  actions.usersArr = ['Batman', 'Robin', 'Alfred', 'Joker', 'Enigma'];
  actions.shuffleArray();
  expect(actions.usersArr).not.toEqual(['Batman','Robin','Alfred','Joker','Enigma']);
});

test('getLeaders() must be defined', () =>{
  expect(actions.getLeaders).toBeDefined()
})

test('get the first item of an array', () => {
  actions.groupsArr = [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], ['Mike','Sully','Randall','Scott']]
  actions.getLeaders()
  expect(actions.leadersArr).toEqual([1, 5,'Mike'])
})

test('createGroups() must be defined', () =>{
  expect(actions.createGroups).toBeDefined()
})

test('create group with the items of an array', () =>{
actions.usersArr = [1,2,3,4,5,6]
actions.createGroups(2,3);
expect(actions.groupsArr).toEqual([[1,2,3],[4,5,6]])
})

test('resetLists() must be defined', () =>{
  expect(actions.resetLists).toBeDefined()
})

test('reset variables', () => {
  actions.numOfUsers = 20
  actions.usersArr = [1, 2, 3]
  actions.groupsArr = [4, 5, 6]
  actions.resetLists()
  expect(actions.numOfUsers).toEqual(0)
  expect(actions.usersArr).toEqual([])
  expect(actions.arrGroups).toEqual([])
})