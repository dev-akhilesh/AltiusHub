const connectDB = async () => {
    const MONGODB_URI = process.env.MONGODB_URI;
    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log("Connected to MOONGODB")

    } catch (error) {
        console.log("Error connecting", error)
    }
};

module.exports = connectDB;