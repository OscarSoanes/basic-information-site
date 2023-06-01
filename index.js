const http = require("http");
const URL = require("url")

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  const path = req.url
  const view = getViewFromURL(path);

  console.log(view);

  res.end("");
}).listen(8080)

function getViewFromURL (path) {
  switch (path) {
    case "/": return "index.html";
    case "/contact": return "contact.html";
    case "/about": return "about.html";
    default: return;
  }
}