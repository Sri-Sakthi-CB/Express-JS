import express from "express";

import router from "./routes/route.js"
const app = express();

// app.use(express.static('./public'));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(process.cwd(), "./public/index.html"));
// })

app.set('view engine', 'ejs')



app.use("/", router);


app.listen(8000, () => console.log("Server Up!"));