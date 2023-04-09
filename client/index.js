const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  const name = getRandomName(new Date().getTime() + '')

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
  //   // TODO: add request body parameters here!
    name
  });

  console.log(`Name: "${ name }", gift: "${ gift }"`);
}

getRandomName = (timeStr) => {
  const randomizer = timeStr.slice(-3)
  console.log('randomizer ', randomizer)
  const flag = randomizer.slice(0, 1)
  const index = parseInt(randomizer.slice(1))
  return flag % 2 === 0 ? 'a name not in list' : niceList[index]
} 

main();