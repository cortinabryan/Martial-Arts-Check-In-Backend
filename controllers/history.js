import { v4 as uuidv4 } from "uuid"; // universally unique identifier

let histories = [];

// Create History
export const checkIn = (req, res) => {
  const history = { ...req.body, id: uuidv4() };

  histories.push(history);

  res.send(history);
};

// Get All
export const getHistories = (req, res) => {
  res.send(histories);
};

// Get One by Id
export const getHistory = (req, res) => {
  const { id } = req.params;

  const foundHistory = histories.find((history) => history.id === id);

  res.send(foundHistory);
};

// Delete History
export const deleteHistory = (req, res) => {
  const { id } = req.params;

  histories = histories.filter((history) => history.id !== id); // keep everything except for this id

  res.send(`History with the id ${id} deleted from database.`);
};
