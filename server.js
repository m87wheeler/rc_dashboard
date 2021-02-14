require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

/** connect to db */
const dbString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ycdxj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(
  dbString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) return console.log(err);
    console.log("MongoDB Connected");
  }
);

const server = express();

/** middleware */
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(
  cors({
    origin: "http://localhost:5000",
  })
);
/** serve front end assets */
server.use(express.static(path.join(__dirname, "client", "build")));

/** routes */
server.use("/api/data", require("./routes/data.routes"));
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

/** initiate server */
const PORT = Number(process.env.PORT || 8000);
server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server listening on port ${PORT}`);
});
