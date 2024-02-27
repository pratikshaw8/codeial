const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/codeial_db")
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch(err=>console.log("Failed to connect to MongoDB",err));

const db = mongoose.connection;
db.on('error' , err=> console.log("MongoDB connection error",err));

db.once('open',()=>console.log("Connected to MongoDB"));


