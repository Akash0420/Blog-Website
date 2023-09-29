import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://user2:Boss8055@ac-qi8pccu-shard-00-00.jr2znfu.mongodb.net:27017,ac-qi8pccu-shard-00-01.jr2znfu.mongodb.net:27017,ac-qi8pccu-shard-00-02.jr2znfu.mongodb.net:27017/?ssl=true&replicaSet=atlas-98n1dm-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;