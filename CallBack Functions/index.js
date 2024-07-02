import express from "express";

const app = express();

// app.get("/double-cb",
//     (req, res, next) => {
//         console.log("First CallBack");
//         next();
//     },
//     (req, res) => {
//         res.send("Second CallBack");
//     }
// );


//Array Of Callbacks
// const cb1 = (req, res, next) => {
//     console.log("First CallBack");
//     next();
// };

// const cb2 = (req, res, next) => {
//     console.log("Second CallBack");
//     next();
// }

// const cb3 = (req, res) => {
//     console.log("Third CallBack");
//     res.send("Array Of CallBacks");
// }

// app.get("/array-cb", [cb1, cb2, cb3]);


const cb1 = (req, res, next) => {
    console.log("First CallBack");
    next();
}

const cb2 = (req, res, next) => {
    console.log("Second CallBack");
    next();
}

app.get("/crazy",
    [cb1, cb2], (req, res, next) => {
        console.log("Third CallBack");
        next();
    },
    (req, res) => {
        console.log("Fourth CallBack");
        res.send("Crazy CallBack Functions!");
    }
)

app.listen(8000, () => console.log("Server Up!"));
