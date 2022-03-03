const express = require("express");
var cors = require("cors");
const authRoutes = require("./routes/auth.js");
const app = express();
const PORT = process.env.PORT || 5000; //port for the server

// allow env variables inside our node application.
require("dotenv").config();

//Fetch twilio credentials
const accountSID = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = require("twilio")(accountSID, authToken);
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;

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

app.post("/", (req, res) => {
  const { message, user: sender, type, members } = req.body;
  if (type === "message.new") {
    members
      .filter(({ user }) => member.user_id !== sender.id)
      .forEach(({ user }) => {
        if (!user.online) {
          twilioClient.message
            .create({
              body: `You have a new message from ${message.user.fullName} - ${message.text}`,
              messagingServiceSid: messagingServiceSid,
              to: user.phoneNumber,
            })
            .then(() => console.log("message sent !"))
            .catch((err) => console.log(err));
        }
      });

    return res.status(200).send("Message sent !");
  }
  return res.status(200).send("Not a new message requst");
});

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
