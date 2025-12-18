const express = require("express");

const app =express()


const foodMenu = [
  { id: 1, foodName: "Veg Burger", category: "Fast Food", price: 80 },
  { id: 2, foodName: "Chicken Burger", category: "Fast Food", price: 120 },
  { id: 3, foodName: "French Fries", category: "Fast Food", price: 60 },
  { id: 4, foodName: "Margherita Pizza", category: "Italian", price: 250 },
  { id: 5, foodName: "Farmhouse Pizza", category: "Italian", price: 320 },
  { id: 6, foodName: "White Sauce Pasta", category: "Italian", price: 220 },
  { id: 7, foodName: "Paneer Butter Masala", category: "Indian", price: 230 },
  { id: 8, foodName: "Dal Tadka", category: "Indian", price: 160 },
  { id: 9, foodName: "Chicken Biryani", category: "Indian", price: 190 },
  { id: 10, foodName: "Veg Biryani", category: "Indian", price: 160 },
  { id: 11, foodName: "Fried Rice", category: "Chinese", price: 150 },
  { id: 12, foodName: "Hakka Noodles", category: "Chinese", price: 140 },
  { id: 13, foodName: "Manchurian", category: "Chinese", price: 170 },
  { id: 14, foodName: "Masala Dosa", category: "South Indian", price: 90 },
  { id: 15, foodName: "Idli Sambhar", category: "South Indian", price: 70 },
  { id: 16, foodName: "Uttapam", category: "South Indian", price: 100 }
];

const AddToCart=[];

app.use(express.json());

app.get("/food",(req,res)=>{

    res.status(200).send(foodMenu);
});




app.post("/admin",(req,res)=>{
    const token="ABCDEF"
    const Access= token === "ABCDEF";

    if(Access){
        foodMenu.push(req.body);
        res.status(200).send("Item added successfully");
    }else{
        res.status(401).send("Access Denied");
    }
});


app.delete("/admin/:id",(req,res)=>{
    const token="ABCDEF"
    const Access= token === "ABCDEF";

    if(Access){
        const id = parseInt(req.params.id);
        const itemIndex = foodMenu.findIndex(item => item.id == id);
        if(itemIndex !== -1){
            foodMenu.splice(itemIndex, 1);
            res.status(200).send("Item deleted successfully");
        }else{
            res.status(404).send("Item not found");
        }
    }else{
        res.status(401).send("Access Denied");
    }
});



app.patch("/admin/:id",(req,res)=>{
    const token="ABCDEF"
    const Access= token === "ABCDEF";

    if(Access){
        const id = parseInt(req.params.id);
        const food = foodMenu.find(item => item.id == id);  

        if(food){
            const index = foodMenu.indexOf(food);
            foodMenu[index] = req.body;
            res.status(200).send("Item updated successfully");
        }else{
            res.status(404).send("Item not found");
        }
    }else{
        res.status(401).send("Access Denied");
    }
});
app.listen(3000,()=>{
    console.log("server started at port 3000");
})