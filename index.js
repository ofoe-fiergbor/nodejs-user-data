const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const server = express();

const userRequestHandler = (req, res) => {
    console.log(req.body)
  res.send("Done!");
};

server.use(express.static(path.join(__dirname, "public")));
server.use(bodyParser.urlencoded({ extended: false }));

server.post("/user", userRequestHandler);

server.listen(3000, () => console.log("Server is ready!"));
