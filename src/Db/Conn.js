const mongoose = require("mongoose");

(async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection is successful");
  } catch (e) {
    console.log("Database Connection error: " + e);
  }
})();
