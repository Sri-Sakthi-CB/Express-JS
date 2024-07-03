import express from "express";
import {allStudents, newStudent, updateStudent, deleteStudent} from "../controllers/student.js";

const router = express.Router();

// router.get("/all", (req, res) => {
//     res.send("All Students");
// })

// router.post("/create", (req, res) => res.send("Create new Students"));

// router.put("/update", (req, res) => res.send("Update Student"));

// router.delete("/delete", (req, res) => res.send("Delete Student"));

// Instead of the above code, The following method using controllers can be used.

router.get("/all", allStudents);
router.post("/create", newStudent);
router.put("/update", updateStudent);
router.delete("/delete", deleteStudent);


export default router;