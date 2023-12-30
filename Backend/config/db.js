const mongoose = require("mongoose");

mongoose.connection.on("open", () => {
  console.log("Database connected successfully");
});
mongoose.connection.on("end", () => {
  console.log("Database disconnected");
});

const startDatabase = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = startDatabase;
