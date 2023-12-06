import mongoose from 'mongoose';

//connection function
const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB",{ useNewUrlParser:true});
        console.log(`Connected to Mongodb Database`);
    }
    catch(error)
    {
        console.log(`Error in mongodb ${error}`)
    }
}

export default connectDB;