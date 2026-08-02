import express from 'express'
import mongoose from 'mongoose'
import  happykidsroutes from './routes/happykidsroutes.js'

const app = express()

app.use(express.json());


mongoose.connect(process.env.MONGO_URI).
then(()=>{console.log("Connected to MongoDb")}).
catch ((err)=>{console.log("Error connecting Mongodb", err)})


app.use("/happykids", happykidsroutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



