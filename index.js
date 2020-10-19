const express = require("express"); // node module을 가져오는것
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on : http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("Hello amn");
}

app.get("/", handleHome);
app.listen(PORT, handleListening);
