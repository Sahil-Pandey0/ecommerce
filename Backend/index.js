const app = require("./app");

const port = 8080;

const startServer = () => {
  try {
    app.listen(port, () => {
      console.log(`server is running on port : ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
