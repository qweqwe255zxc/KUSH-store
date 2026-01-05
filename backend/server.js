import { getAllCategories } from "./category.js";
import cors from "cors";
// import { connection } from "./database.js";

import express from "express";
import { getAllProducts } from "./product.js";
// document.style.backgroundColor = 'black'

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>success</h1>");
});

app.get("/categories", (req, res) => {
    getAllCategories((err, results) => {
        if (err) {
            console.error(`Error: ${err}`);
            res.status(500).send("Server Error");
        } else {
            res.json(results);
        }
    });
});

app.get("/products", (req, res) => {
    getAllProducts((err, results) => {
        if (err) {
            console.error(`Error: ${err}`);
            res.status(500).send("Server Error");
        } else {
            res.json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
