const http = require("http");
const requestHandler = require("./request-handler.js");
const server = http.createServer(requestHandler);

server.listen(5000, () => {
  console.log(
    "el servidor está escuchando peticiones en http://localhost:5000/"
  );
});