import express from "express";

const app = express();

// Route Params

app.get("/student/delete/:id", (req, res) => {
    res.send(req.params.id + " is Deleted");
})


// app.get("/ecom/electronic/iphone/:model", (req, res) => {
//     res.send("IPhone " + req.params.model + " Pro Max");
// })


// app.get("/ecom/electronic/iphone/:model", (req, res) => {
//     const {model} = req.params;
//     res.send(`IPhone ${model} Pro Max`);
// });


app.get("/product/:category/:id", (req, res) => {
    const {category, id} = req.params;
    res.send(`Product is ${category} of ID ${id}`);

})

app.get("/product/order/:date/:month/:year", (req, res) => {
    const {date, month, year} = req.params;
    res.send(`Product Ordered on : ${date}/${month}/${year}`);
})


// Router Param Function 

app.param("id", (req, res, next, id) => {
    console.log(`id: ${id}`);
    next();
})

app.get("/user/:id", (req, res) => {
    console.log("This is User ID Path");
    res.send("Response Ok");
})

app.listen(8000, () => console.log("Server Up!"));