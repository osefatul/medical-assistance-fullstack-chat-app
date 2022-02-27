const express = require("express");
const cors = require("cors");

const app = express();
const PORT = proces.env.PRT || 5000; //port for the server

// allow env variables inside our node application.
require("dotenv").config();

app.use(cors());
app.use(express.json()); //allow us to pass json from frontend to backend
app.use(express.urlencoded());

//first route

app.get("/", (req, res) => {
  res.send("hello, world");
});

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
