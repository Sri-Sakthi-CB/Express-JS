import express from "express";
import students from "./routes/student.js";
import teachers from "./routes/teacher.js";

const app = express();

app.use("/students", students);
app.use("/teachers", teachers);


app.listen(8000, () => console.log("Server Up!"));