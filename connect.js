// let mysql = require("mysql2/promise");
import mysql from "mysql2/promise";
import { v4 as uuidv4 } from "uuid"; // universally unique identifier

async function main() {
  // create the connection
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "martialarts",
    database: "martialarts",
  });

  console.log("Connected to the MySQL server.");

  // await connection.execute(
  //   `INSERT INTO history (id,name,time) VALUES (?,'intermediate','10:00 AM')`,
  //   [uuidv4()]
  // );

  await connection.execute(`DELETE FROM history WHERE id IS NULL`);

  // query database
  const [rows] = await connection.execute(`SELECT * FROM history`);

  console.log(rows);
}

main();

// Reminder database = martialarts, table = history
