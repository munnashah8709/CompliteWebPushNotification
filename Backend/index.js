const express = require("express");
const cors = require('cors');
require("dotenv").config();
const port = 8000;
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

require("../Backend/Components/connections/connect");
const oppsenginedata = require("../Backend/Components/models/users");


app.post("/signup", async (req, res) => {
  try {
    const emailId = req.body.email;
    const emailData = await oppsenginedata.findOne({ email: emailId });
    if (emailData) {
      return res.send("Email is already in use");
    }
    bcrypt.hash(req.body.password, 10, async function (hashError, hash) {
      if (hashError) {
        return res.json({ message: hashError });
      }
      const data = new oppsenginedata({
        email: req.body.email,
        password: hash,
        DeviceTocken: req.body.DeviceTocken, // Corrected property name
      });
      const savedData = await data.save();
      res.send(savedData);
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

const fetch = require('node-fetch');
const { sendPushNotification } = require('../Backend/utils/firebasewebpush');
app.post("/webpushnotifications",  (req, res)=> {
	const devicetocken= req.body.DeviceTocken;
	oppsenginedata.findOne({ DeviceTocken:devicetocken })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
	     const Devicetockens=user.DeviceTocken
         const notificationTitle = "Form Accepted";
         const notificationBody = "Your form has been accepted by the admin.";
         sendPushNotification(Devicetockens,notificationTitle,notificationBody);
         return res.status(200).send({ message:"send successfull" });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error finding user",
      });
    });
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
