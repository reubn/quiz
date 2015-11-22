const serveStatic = require("serve-static")
const fallback = require("express-history-api-fallback")

module.exports = function(app){
  // Serve Static Assets
  app.use(serveStatic("front/compiled/", {
    "index": ["../index.html"],
    maxAge: process.env.NODE_ENV === "production" ? "30 days" : "0"
  }))

  app.use(fallback("index.html", {
    root: "./front",
    maxAge: process.env.NODE_ENV === "production" ? "30 days" : "0"
  }))
}
