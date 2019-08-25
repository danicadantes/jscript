const playerName = 'Patrik Laine is lame';
const teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
const message ='Winnipeg is the best Canadian city, Go Winnipeg';

const uno = playerName.slice(0,15);
const dos = `${teams.charAt(46).toUpperCase()}${teams.slice(47,50)}`;
const tres = message.slice(12,20);
const kwatro = message.slice(34,38);

const result = `${uno} ${dos} ${tres} ${kwatro}`;
console.log(result);

console.log(`${uno.slice(0,12).toUpperCase()} ${uno.slice(13)} ${tres} ${dos} player ${kwatro} ${dos}!!`);