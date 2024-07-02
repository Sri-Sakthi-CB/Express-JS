// Create Folder
// npm init -y (package.json())
// npm install express
// Create instance express
// Provide port : 8000
// Basic Routing
// nodemon --> npm run dev


import express from "express";

const app = express();


app.get('/', (req, res) => {
    res.send("<h1> Home Page </h1>");
});


app.get("/about", (req, res) => {
    res.send("<h1> About Page </h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1> Contact Page </h1>");
});

app.listen(8000, () => console.log("Server Up!"));
