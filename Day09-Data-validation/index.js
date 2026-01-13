const express = require('express');
const app = express();
const mongoose = require('mongoose');
const main = require('./database');
const User = require('./Models/users');     

app.use(express.json());


app.post("/register", async (req, res) => {
    try {

        await User.create(req.body);
        res.status(201).send("User registered successfully");

    }
    catch (err) {
        res.status(500).send("Internal Server Error");
    }   
});



app.get("/users", async (req, res) => {
    try {
        const users =  await User.find();       

        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).send("Internal Server Error");
    }   

});

app.get("/user/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

app.delete("/user/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);   
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.status(200).json(user); 

    }   
    catch (err) {
        res.status(500).send("Internal Server Error");
    }
});


app.patch("/user",async (req, res) => {
    try {
        const {id, ...updateData} = req.body;
         await User.findByIdAndUpdate(id,updateData);
         res.send("update successfully");
            

    }
    catch (err) {
        res.status(500).send("error");
    }
}
);




main()
.then(async () => {
    console.log('Connected successfully to server');        
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(err => console.error('Connection error', err));