import express from "express";

const app = express();

// Query String
app.get("/product", (req, res) => {

    // res.send(`Response Ok ${req.query.category}`);

    // Example URL:
    // http://localhost:8000/product?category=iphone&id=132
    
    const {category, id} = req.query;
    res.send(`Product Category: ${category} & Product ID: ${id}`);
});

app.listen(8000, () => console.log("Server Up!"));