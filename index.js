import express from "express"; // library / framework
import bodyParser from "body-parser"; // allows you to access req.body from within routes and use that data.
import cors from "cors"; // is security feature that can check if you get only request from accepted domains

import { historyRoutes } from "./routes/history.js";

const app = express(); // Instantiate an express app, the main work horse of this server
const PORT = 5000; // Backend port - people usually use 5000

app.use(bodyParser.json()); // use json data for our whole application

app.use(cors());

app.use("/histories", historyRoutes);

app.listen(PORT, () =>
  console.log(`YOOOOO SOOOO Server runing on port: http://localhost:${PORT}`)
);
