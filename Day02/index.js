const express= require("express");



const app=express();


app.use ("/",(req,res)=>{
    res.send("I am your home page");
})

app.use ("/about",(req,res)=>{
    res.send({"name":"Manisha yadav", "age":20, "gender":"female"});
})


app.use ("/contact",(req,res)=>{
    res.send("this is my contact page")
})

app.listen(4000,()=>{
    console.log("listening at port 4000");
})