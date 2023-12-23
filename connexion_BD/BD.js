
const mongoose = require('mongoose');

const connectDB = async () => {
    console.log('Connecting to MongoDB...');
  try {
    // await mongoose.connect('mongodb+srv://maryam:mongo@atlascluster.66xcq1z.mongodb.net/?retryWrites=true&w=majority.mongodb.net', {});
    await mongoose.connect('mongodb://localhost:27017/jsonplaceholder', {});
  
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process if there's an error
  }
};

module.exports = connectDB;