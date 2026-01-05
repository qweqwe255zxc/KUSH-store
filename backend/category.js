import { connection } from "./database.js";

export const getAllCategories = (callback) => {
    connection.query("SELECT * FROM categories", (err, results) => {
        if (err) return callback(err);
        callback(null, results);
        // if (err) {
        //     console.error(`Error: ${err}`);
        //     res.status(500).send("Server Error");
        // } else {
        //     res.json(results);
        // }
    });
};
