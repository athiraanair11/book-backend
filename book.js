const Cors=require("cors")
const Bodyparser=require("body-parser")
const Express=require("express")
const Mongoose=require("mongoose")
const bookModel = require("./models/bookModel")


var book=Express()



book.use(Bodyparser.json())
book.use(Bodyparser.urlencoded({extended:true}))

app.get("/",(req,res)=>{

    res.send("welcome to my book management app")
})

app.post("/entry",(req,res)=>{

    let data=new bookModel(req.body)
    console.log(data)

    res.send("add books")
})

app.post("/search",(req,res)=>{

    res.send("book search")
})

app.post("/edit",(req,res)=>{

    res.send("book editing")
})

app.post("/delete",(req,res)=>{

    res.send("book delete")
})

app.get("/viewall",(req,res)=>{

    res.send("viewall book")
})

app.listen(6612)