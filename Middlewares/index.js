import express from "express";
import userCredentials from "./middlewares/logs.js";

const app = express();

/*  Format:

    -Request
    -Middleware
    -Response
*/

// app.get("/", userCredentials, (req, res) => {
//    res.send("<h1> Hello User </h1>")
// })

app.use(userCredentials);

// app.use() method can be used when there is more than one route, so that It can check the userCredentials on each route.

app.get("/", (req, res) => {
    res.send("<h1> Hello User </h1>")
 });

 app.get("/about", (req, res) => {
    res.send("<h1> About Section </h1>")
 });

 app.get("/contact", (req, res) => {
    res.send("<h1> Contact Section </h1>")
 });

app.listen(8000, () => console.log("Server Up!"));