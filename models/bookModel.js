const Mongoose=require("mongoose")
let schema=Mongoose.Schema(

    {
        bookCode:String,
        bookPrice:String,
        bookName:String,
        writtenBy:String
    }



   
)

let bookModel=Mongoose.model("books",schema)
module.exports=bookModel