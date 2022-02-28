const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat").StreamChat;
const crypto = require("crypto");

require("dotenv").config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const login = (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const signup = () => {
  try {
    const { fullName, username, password, phoneNumber } = req.body;

    const userId = crypto.randomBytes(16).toString("hex");
    const serverClient = connect(api_key, api_secret, app_id);
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = serverClient.createUserToken(userId);

    res.status(200).json({
      token,
      fullName,
      username,
      userId,
      hashedPassword,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

module.exports = { login, signup };
