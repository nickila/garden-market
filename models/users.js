const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
  firstName: String,
  lastName: String,
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  bio: String,
  status: {
    type: String,
    required: true,
    default: "Member"
  },
  address: String,
  city: String,
  state: String,
  zip: String,
  neighborhood: String,
  date: {
    type: Date,
    default: Date.now
  },
  messages: []
});

const Users = mongoose.model("Users", users);

module.exports = Users;
