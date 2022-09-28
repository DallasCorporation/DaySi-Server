const express = require("express");
const mongoose = require('mongoose')
const app = express();
const cors = require("cors");
const { Server } = require("socket.io");


require("dotenv").config({ path: "./.env" });
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true }, () => {
  console.log("CONNECTED")
})
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/users"));
app.use(require("./routes/activity"));
app.use(require("./routes/userPreference"));
app.use(require("./routes/mailer"));
app.use(require("./routes/category"));

// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});