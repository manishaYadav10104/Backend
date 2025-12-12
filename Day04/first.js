const express = require("express");
const app = express();

app.use(express.json()); // to read JSON body

const arr = [
    { id: 1, name: "manisha", age: 20 },
    { id: 2, name: "manu", age: 21 },
    { id: 3, name: "savi", age: 22 },
    { id: 4, name: "saloni", age: 18 }
];

app.patch("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body;

    const user = arr.find((u) => u.id === id);

    if (!user) {
        return res.status(404).send("User not found");
    }

    // update only the keys coming in body
    Object.assign(user, body);

    res.send({
        message: "Data patched successfully",
        updatedUser: user
    });
});

app.listen(3000, () => {
    console.log("listening at port 3000");
});
