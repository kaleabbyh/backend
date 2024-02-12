const mongoose = require("mongoose");

const connectDB = async () => {
  try {
       await mongoose.connect(process.env.MGDB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    });
    console.log("successfully connected to mongodb");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
//module.exports = connectDB;
