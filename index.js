const express=require('express');
require('dotenv').config()
const app=express()

const git={
    name:"Amaresh",
    degree:'Btech',
    branch:'IT'
}
const port=
app.get('',(req,res)=>{
res.send("Hello amaresh")
})

app.get('/login',(req,res)=>{
    res.send("Welcome to the login page");
})

app.get('/reg',(req,res)=>{
    res.send("welcome to the registration page<hr>")
})

app.get('/git',(req,res)=>{
   res.json(git)
})

app.listen(process.env.PORT,()=>{
    console.log(`Listening to the port ${process.env.PORT}`)
})