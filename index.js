const express = require("express");
const app = express();
const port = 3000;

const fs = require("fs")


app.get("/", (req, res) => {
  fs.readFile("views/index.html", (err, dat) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(dat);
    res.end();
  });
})

app.get("/contact", (req, res) => {
  fs.readFile("views/contact.html", (err, dat) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(dat);
    res.end();
  });
})

app.get("/about", (req, res) => {
  fs.readFile("views/about.html", (err, dat) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(dat);
    res.end();
  });
})

app.get("*", (req, res) => {
  fs.readFile("views/404.html", (err, dat) => {
    if (err) throw err;
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write(dat);
    res.end();
  });
})

app.listen(port, () => {
  console.log(`Running express on port ${port}.`)
})