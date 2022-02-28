const express = require("express");
var cors = require("cors");
const authRoutes = require("./routes/auth.js");
const app = express();
const PORT = process.env.PORT || 5000; //port for the server

// allow env variables inside our node application.
require("dotenv").config();

app.use(cors());
app.use(express.json()); //allow us to pass json from frontend to backend
app.use(express.urlencoded());

//This code snippet, however, would enable CORS for all resources on your server.
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/auth", authRoutes);

//first route
app.get("/", (req, res) => {
  res.send("hello, world");
});

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
