const express = require("express");
const cors = require("cors");
const connectDB = require("./connection");

const app = express();
const port = process.env.PORT || 3000;
const router = require("./routes/events");

connectDB();

app.use(cors());
app.use(express.json());
app.use("/events", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
