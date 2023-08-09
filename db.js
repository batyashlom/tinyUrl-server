import mongoose from 'mongoose'

const uri= "mongodb+srv://batya:wkccpay9qFB8rTY4@cluster0.axm9ulv.mongodb.net/"

 const connectDB = async ()=>{
    await mongoose.connect(uri);
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