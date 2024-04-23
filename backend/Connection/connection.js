const mongoose = require("mongoose")

const conn = async (req,res) =>{
    try {
        await mongoose.connect("mongodb+srv://zeeshanakhter957:WqSdQPywubJBsLCf@cluster0.c53vu58.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
        console.log("MongoDB Connected")
    })
    } catch (error) {
        res.status(400).json({
            message: "MongoDB not Connected"
        })
    }
}

conn()