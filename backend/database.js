import { createConnection } from "mysql2";

export const connection = createConnection({
    host: "localhost",
    user: "root",
    password: "Dpopdel254",
    database: "kushDB",
});

const connectToDB = () => {
    connection.connect((err) => {
        err
            ? console.log(`error connecting to db: ${err}`)
            : console.log(`Connection success`);
    });
};

connectToDB()