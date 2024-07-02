// HTTP METHODS
// GET => Retrieve Data
// POST => Create/ Insert Data
// PUT => Completely Update Data
// PATCH => Partially Update Data
// DELETE => Delete Data
// ALL => Any HTTP Request Method 


import express from "express";

const app = express();

// String Pattern :
app.get("/ab?cd", (req, res) => {
    res.send("If the user hit (acd) or (abcd) then this will Run");
});

// Regex: 
app.get(/x/, (req, res) => {
    res.send("If the path includes the letter (x) it will work.");
})

app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
    res.send("If the path includes the user and a 4 digit number, it will work. ");
})

app.get("/products/iphone", (req, res) => {
    res.send("This code will be displayed only if it matches the exact Path");
})
app.listen(8000, () => console.log("Server Up!"));
