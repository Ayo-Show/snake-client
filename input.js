let connection;

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  stdin.resume();

  return stdin;
};

const handleUserInput = function(input) {
  if (input === "\u0003") {
    process.exit();
  }
  if (input === "w") {
    connection.write("Move: up");
  }
  if (input === "d") {
    connection.write("Move: right");
  }
  if (input === "s") {
    connection.write("Move: down");
  }
  if (input === "a") {
    connection.write("Move: left");
  }
  if (input === "i") {
    connection.write("Say: Hello!");
  }
};

setupInput();

module.exports = setupInput;