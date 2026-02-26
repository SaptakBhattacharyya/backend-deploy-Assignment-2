const express= require('express');
const app=express();
app.use(express.json());
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  }
];
app.get("/products",(req,res)=>{
  res.status(200).json(products);
})

app.get("/products/:id",(req,res)=>{
    const id=Number(req.params.id);
    const product=products.find((u)=>u.id==id);
    if(product){
        res.status(200).json(product);
    }else{
        res.status(404).json({message:"Product not found"});
    }
})


app.get("/products/category/:categoryName",(req,res)=>{
    const categoryName=req.params.categoryName.toLowerCase();
    const  prod=products.filter((u)=>u.category.toLowerCase()==categoryName)

    if(prod){
        res.status(200).json(prod);
    }else{
        res.status(404).json({message:""})
    }
})


app.post("/products",(req,res)=>{
    const newproduct= {
    id: products.length+1,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };
  products.push(newproduct);
  res.status(201).json(newproduct);
})


app.put("/products/:id",(req,res)=>{
    const id=Number(req.params.id);
    const productIndex=products.findIndex((u)=>u.id==id);
    products[productIndex]=req.body;
    res.status(200).json({message:"product updated"})
})


app.put("/products/:id/stock",(req,res)=>{
    const id=Number(req.params.id);
    const productIndex=products.findIndex((u)=>u.id===id);
    products[productIndex].stock=req.body.stock;
    res.status(200).json({message:"stock updated"})
})


app.put("/products/:id/price",(req,res)=>{
    const id=Number(req.params.id);
    const productIndex=products.findIndex((u)=>u.id==id);
    products[productIndex].price=req.body.price
    res.status(200).json({message:"price updated"})
})



app.listen(3000,()=>{
    console.log("server runs on 3000")
})