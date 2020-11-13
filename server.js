const express = require("express");
const path = require("path");
const helmet = require("helmet");
const compress = require("compression");

const port = 5110;
const app = express();

app.use(compress());
app.use(helmet());
// serve static assets normally
app.use(
  "/cms/",
  express.static(path.join(__dirname, "dist/"), {
    maxAge: 2628000000
  })
);

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get("/cms/*", function(request, response) {
  response.sendFile(path.join(__dirname, "dist/", "index.html"));
});

app.listen(port);

console.log("server started on port" + port);