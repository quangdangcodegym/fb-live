const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
server.use((req, res, next) => {
  console.log("HELLO123 aaaa");
  // Continue to JSON Server router
  next();
});
server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
