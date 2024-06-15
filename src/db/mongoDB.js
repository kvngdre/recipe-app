const mongoose = require("mongoose");
const logger = require("../utils/logger");
const config = require("../utils/config");

const connectMongoDB = async () => {
    try {
        logger.info("Connecting to MongoDB, please wait...");

        const connectDB = await mongoose.connect(config.MONGODB_URI);
        logger.info(`MongoDB Database connected successfully on: ${connectDB.connection.host}`)
    } catch (error) {
        logger.error(`Error connecting to MongoDB Database: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectMongoDB;