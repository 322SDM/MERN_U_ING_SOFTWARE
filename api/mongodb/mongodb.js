import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Conectado a mongo');
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on('connected', () =>{
    console.log("Mongodb conectado");
})

mongoose.connection.on('disconnect', () =>{
    console.log("Mongodb desconetado");
})

export default connect;