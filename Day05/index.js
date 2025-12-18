const express = require("express");
const app = express();


const arr = [
    {
        "id": "1",
        "name": "manisha yadav",
        "subject": "math"
    },
    {
        "id": "2",
        "name": "manu ",
        "subject": "hindi"
    },
    {
        "id": "3",
        "name": "savi",
        "subject": "english"
    },


]

app.get("/user/:id",(req, res)=>{
    
    res.send("data get successfully");
})



app.listen(4000, () => {
    console.log("listening at port 4000");
});
