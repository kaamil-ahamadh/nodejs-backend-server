const http = require("http");

//Server
const app = require("./app");
const server = http.createServer(app);

//Uncaught Exception
process.on("uncaughtException", (ex) => {
  console.log("Uncaught Exception: ", ex);
});

//Run Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`RESTful API/Server is running on PORT ${PORT}`);
});
