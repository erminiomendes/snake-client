const { stdin } = require('process');
const { connect } = require('./client');
let connection;
let message = '';

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};


const handleUserInput = (input) => {
  if (input === '\u0003') {
    process.exit();
  } 
  if (input === 'w') {
    connection.write('Move: up');
  } 
  if (input === 's') {
    connection.write('Move: down');
  } 
  if (input === 'a') {
    connection.write('Move: left');
  } 
  if (input === 'd') {
    connection.write('Move: right');
  } 


};

stdin.on('data', handleUserInput);

module.exports = setupInput;