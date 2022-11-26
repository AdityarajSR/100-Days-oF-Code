// const username = 'adityaraj';
// console.log(username);

const http = require("http");

function handleRequest(request, response) {
  if (request.url === "/currenttime") {
    response.statusCode = 200;
    response.end('<h1>' + new Date().toISOString() + '</h1>');
  } else if (request.url === "/") {
    response.statusCode = 200;
    response.end("<h1>Helllo World</h1>");
  }
}

const server = http.createServer(handleRequest);

server.listen(3000);

// amazon.com  => send a request to amazon's server
// amazon.com:80      {80} --> by default for amazon, can also be 443
