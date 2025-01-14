const express = require("express")
const app = express()

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`)
  next();
})

app.use(express.static(__dirname + "/public"));


app.listen( () =>{
  console.log("Server running!")
})
