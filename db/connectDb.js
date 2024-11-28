
import mongoose from "mongoose";

const connectDb = async () => {
        
      
        try {
            const uri = 'mongodb://localhost:27017/chai';
            const conn = await mongoose.connect(uri, {
                useNewUrlParser: true,useUnifiedTopology: true 
            });
            mongoose.connect(uri, { useNewUrlParser: true, });
  
            console.log(`MongoDB Connected: ${conn.connection.host}`);
            return conn;
            
        } catch (error) {
            console.error(error.message);
            process.exit(1);
        }
    }

  export default connectDb;

   // Replace with your actual connection string
  