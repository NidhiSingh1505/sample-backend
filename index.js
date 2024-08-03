const express = require("express");
require('dotenv').config()
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World:) haha!");
});

app.get("/instagram", (req, res) => {
    res.send("instagram.com");
  });
app.get("/login",(req,res) =>{
    res.send("<h1>Please Login")
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});
