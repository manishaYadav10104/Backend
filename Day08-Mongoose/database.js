const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // load .env

const { Schema } = mongoose;

async function main() {
    await mongoose.connect(process.env.MONGO_URI);

    const userSchema = new Schema({
        name: String,
        age: Number,
        city: String,
        gender: String
    });

    // model create
    const User = mongoose.model('User', userSchema);

    await User.create({ name: "saloni", age: 18, city: "Delhi", gender: "Female" });
    await User.create({ name: "Manisha", age: 20, city: "Noida", gender: "Female" });

    await User.insertMany([
        { name: "Rohit", age: 22, city: "Mumbai", gender: "Male" },
        { name: "Anjali", age: 19, city: "Bangalore", gender: "Female" },
        { name: "Amit", age: 25, city: "Chennai", gender: "Male" }
    ]);

    console.log("Data inserted successfully");
}

main()
    .then(() => console.log("Connected successfully to MongoDB"))
    .catch(err => console.error("Connection error:", err));
