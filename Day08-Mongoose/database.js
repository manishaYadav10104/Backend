const mongoose = require('mongoose');
const { Schema } = mongoose;


async function main() {
    mongoose.connect("mongodb+srv://ManishaYadav10104:Manisha%4010104@manisha10104.qemkidy.mongodb.net/Bookstore");

    const userSchema = new Schema({
        name: String,
        age: Number,    
        city: String,
        gender: String
    })

// model ko create krna
const User= mongoose.model('User', userSchema);
const User1 = new User({ name: "saloni", age: 18, city: "Delhi", gender: "Female" });
await User1.save();


await User.create({ name: "Manisha", age: 20, city: "Noida", gender: "Female" });



await User.insertMany([
    { name: "Rohit", age: 22, city: "Mumbai", gender: "Male" },
    { name: "Anjali", age: 19, city : "Bangalore", gender: "Female" },
    { name: "Amit", age: 25, city: "Chennai", gender: " Male" }
]);
}

main()
.then(() => console.log('Connected successfully to server'))
.catch(err => console.error('Connection error', err));