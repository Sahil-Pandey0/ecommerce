const app = require("./app");
const startDatabase = require("./config/db");

const port = 8080;

const startServer = async () => {
  try {
    await startDatabase();
    app.listen(port, () => {
      console.log(`server is running on port : ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
