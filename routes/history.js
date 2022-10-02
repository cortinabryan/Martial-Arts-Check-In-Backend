import express from "express";

import {
  checkIn,
  getHistories,
  getHistory,
  deleteHistory,
} from "../controllers/history.js";

const router = express.Router();

// all routes in here are starting with /histories
router.get("/", getHistories);

// Generate new user and random id
router.post("/", checkIn);

// /users/2 => req.params {id: 2} //

// Find a user through id placeholder
router.get("/:id", getHistory);

// Delete user via id
router.delete("/:id", deleteHistory);

// export default router;

// router.post(); // from the client to the server

export const historyRoutes = router;

///////////////////////////////////////////////////////////////////////

// {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
// },
// {
//   firstName: "Jane",
//   lastName: "Johnson",
//   age: 24,
// },
