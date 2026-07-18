import mongoose from 'mongoose';

const connectDB = () => {
    // console.log("URI:", process.env.Mongo_URL);
    mongoose.connect(process.env.Mongo_URL)
        .then(() => {
            console.log("MongoDB Connected");
        })
        .catch((err) => {
            console.log(err.message);
            process.exit(1);
        });
};

export default connectDB;