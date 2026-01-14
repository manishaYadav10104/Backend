const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users");

app.use(express.json());

// REGISTER
app.post("/register", async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).send("User registered successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET ALL USERS
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET USER BY ID
app.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// DELETE USER
app.delete("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// UPDATE USER
app.patch("/user", async (req, res) => {
  try {
    const { id, ...data } = req.body;
    await User.findByIdAndUpdate(id, data);
    res.send("Updated successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// CONNECT DB THEN START SERVER
main()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(console.error);
