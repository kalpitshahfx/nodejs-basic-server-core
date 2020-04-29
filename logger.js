const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    //Raise an event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;
