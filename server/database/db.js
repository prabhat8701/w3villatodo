import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = () => {

    const MONGODB_URI = `mongodb+srv://prabhat8701ps:prabhat2002@cluster0.zigwsqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;