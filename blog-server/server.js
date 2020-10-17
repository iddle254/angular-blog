const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: ["http://localhost:4200", "http://localhost:4000"],
};

app.listen(8000, () => {
  console.log("Server has started and is listening on port 8000");
});
app.use(cors(corsOptions));

app.get("/", function (request, response) {
  response.send("Hello Node.js");
});

require("./articles.js")(app);
