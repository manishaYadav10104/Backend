const { constants } = require("buffer");
const express =require("express");
const app=express();

const BookStore=[
    {id:1, name:"Harry potter",author:"DevFlux"},
    {id:2,name:"friends" , author:"Vikas"},
    {id:3,name:"Nexus", author:"Rohit"},
    {id:4, name:"Harry ",author:"Dev"},
    {id:5,name:"Goodies" , author:"Manisha"},
    {id:6,name:"hello", author:"savi"}
]


app.use(express.json());


app.get("/book",(req,res)=>{
    res.send(BookStore);
})



app.get("/book/:id",(req,res)=>{
    const id= parseInt(req.params.id);
    const Book=BookStore.find(info=>info.id===id)
    res.send(Book);
})



app.post("/book",(req,res)=>{
    BookStore.push(req.body);
    console.log(req.body)
    res.send("Data successfully saved")
})






app.listen(3000,()=>{
    console.log("listening at port 3000")
})