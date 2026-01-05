import { connection } from "./database.js";

export const getAllProducts = (callback) => {
    connection.query('SELECT * FROM products_view', (err, results) => {
        if (err) return callback(null)
        callback(null, results)
    });
};
