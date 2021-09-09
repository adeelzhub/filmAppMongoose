const mongoose = require("mongoose")
require("dotenv").config()
   
// const client = new MongoClient(process.env.MONGO_URI)


const connection = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Successfully connected")

    }catch (error){
    console.log(error)
};
};


// connection();

// module.exports = connection;