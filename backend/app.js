const express= require('express')
// export mongoose
const mongoose=require('mongoose')
 const categoryRoutes=require('./routes/category');

const app=express()
const port=3000;
app.use(express.json());
app.get("/",(req, res) => {
   res.send("Welcome")
});
//

app.use("/category",categoryRoutes);

// Import routes


//connection with mongoose db using function
async function connectDB(){
    await  mongoose.connect('mongodb://localhost:27017/',{
        dbName : "e-comm-store-db"
    });
    console.log("DB Connected Successfully");
        
}
//start db
connectDB().then(()=>console.log("DB Connected")).catch(err=>console.log(err));


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
