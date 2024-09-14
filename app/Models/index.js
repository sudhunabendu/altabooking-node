const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;


db.ab_roles = require("./roles.model");
db.ab_users = require("./users.model");
db.ab_user_details = require("./userDetails.model");
db.ab_user_codes = require("./userCode.model")


mongoose.connect(`mongodb://127.0.0.1:27017/altabooking-node`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connect to MongoDB.");
  // initial();
}).catch(err => {
  console.error("Connection error", err);
  process.exit();
});

module.exports = db;