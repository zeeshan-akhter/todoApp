const express = require("express");
const app = express();
const cors = require("cors");
const auth = require("./routes/auth");
const list = require("./routes/list");
app.use(express.json()); //after doing this we can send data from backend to frontend
require("./Connection/connection");

const allowedOrigins = [
  "http://localhost:3000",
  "https://todo-app-master-ashen.vercel.app/",
  "https://todo-app-master-ashen.vercel.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.options("*", cors());
app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1", auth);

app.use("/api/v2", list);
const port = 8001;
app.listen(port, () => {
  console.log(`Server is listening to ${port}`);
});
