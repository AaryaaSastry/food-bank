const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const empmodel = require("./models/emp");


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/login")

app.post('/register',(req,res)=>{
    empmodel.create(req.body)
    .then(result => res.status(201).json({ message: "User registered successfully", data: result }))
    .catch(err => res.status(500).json({ message: "Error registering user", error: err }));
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  empmodel.findOne({ email, password })
    .then(user => {
      if (user) {
        res.status(200).json({ success: true, message: "Login successful", user });
      } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
      }
    })
    .catch(err => res.status(500).json({ success: false, message: "Error logging in", error: err }));
});

const donationRoutes = require("./routes/donations");
app.use("/api/donations", donationRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));