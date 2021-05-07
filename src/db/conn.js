const  mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/arpandynamic",{
    useCreateIndex : true,
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(() => {
     console.log("connection established");
}).catch((error) =>{
    console.log(error);
})
