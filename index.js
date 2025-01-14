const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`)
  next();
})

// Step 1. Install Express

// Step 2. Create a public folder and move static files into it
// Note that package-lock.json & package.json are server side files

// Step 4. Add static file middleware

// Step 5. Create a route handler to '/' that sends the confetti.html file

// Step 6. Create a route handler to '/cat' that sends the cat.gif file

// Step 7. Run your server and test your route

// Step 8. Something looks off on your confetti page, figure out why your styling is missing and fix it.


app.use((req, res, next) => {
  res.status(404).send("404 Not Found")
})

app.listen(3000, () =>{
  console.log("Server running!")
})
