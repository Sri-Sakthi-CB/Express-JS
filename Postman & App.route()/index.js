import express from "express";

const app = express();


// repetition code
// app.get("/student", (req, res) => {
//     res.send("All Students");
// });

// app.post("/student", (req, res) => {
//     res.send("Adding New Student");
// })

// app.put("/student", (req, res) => {
//     res.send("Update student");
// })

// app.delete("/student", (req, res) => {
//     res.send("Delete Student");
// })

// Refactor
app.route("/student")
.get((req, res) => res.send("All Students"))
.post((req, res) => res.send("Add New Students"))
.put((req, res) => res.send("Update New Students"))
.delete((req, res) => res.send("Delete Students"));



app.listen(8000, () => console.log("Server Up!"));
