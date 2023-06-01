const http = require("http");
const URL = require("url");
const fs = require("fs");

http.createServer((req, res) => {
  const path = req.url
  const view = getViewFromURL(path);

  fs.readFile(view, (err, dat) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(dat);
    return res.end;

  })
}).listen(8080)

function getViewFromURL (path) {
  switch (path) {
    case "/": return "views/index.html";
    case "/contact": return "views/contact.html";
    case "/about": return "views/about.html";
    case "/favicon.ico": return;
    default: return;
  }
}