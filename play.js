const net = require("net");

// establishes a connection with the game server
const connect = require('./client');

let connection;

const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  
  const handleUserInput = function(data){
    if (data === '\u0003') {
      process.exit();
    };
  
  };
  
  return stdin;
  
}  
  

console.log("Connecting ...");

