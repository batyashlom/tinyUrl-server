import mongoose from 'mongoose';

import dotenv from 'dotenv'
dotenv.config()


 const connectDB = async ()=>{
    await mongoose.connect(process.env.URI);
};

mongoose.connection.on("connected",()=>{
    console.log("mongo is connected");
});

mongoose.set('toJSON',{
    virtuals: true,
    transform: (doc,converted)=>{
        delete converted._id;
    }
});

export default connectDB;