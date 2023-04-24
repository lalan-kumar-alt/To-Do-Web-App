const mongoose = require("mongoose");
require("dotenv").config()
const DATABASE=process.env.DATABASE
mongoose.connect(DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
);

mongoose.connection.on("error", (err) => {
  console.log("Connection failed");
});
mongoose.connection.on("connected", (connected) => {
  console.log("Connected with database ");
});