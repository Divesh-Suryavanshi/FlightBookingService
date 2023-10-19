const app = require("express")();
const bodyParser = require("body-parser");

function prepareAndStartServer(params) {
  const { PORT } = require("./config/serverConfig");
  const appRoutes = require("./routes");

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //   app routes
  app.use("/api", appRoutes);

  // starting the server
  app.listen(PORT, () => {
    console.log(`server is listening at port: ${PORT}`);
  });
}

prepareAndStartServer();
