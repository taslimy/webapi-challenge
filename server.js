const express = require("express");
const helmet = require("helmet");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(logger);

server.get("/", (req, res) => {
  res.send(`<p>Hello, from the Web API Sprint Challenege.</p>`);
});

// Define Routes
server.use("/api/actions", require("./routes/api/actions-router"));
server.use("/api/projects", require("./routes/api/projects-router")); // I Fixed a typo here... had projets.....

// Logger
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
  next();
}

module.exports = server;
