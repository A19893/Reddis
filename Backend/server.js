const express = require("express");
const app = express();
const axios = require("axios");
const redis = require("redis");
const client = redis.createClient();
const path = require("path");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const session = require("express-session");
const oneday = 1000 * 60 * 60 * 24;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("PUBLIC"));
app.use(cors());
app.use(
  session({
    secret: "Yashloveself1@",
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: oneday },
  })
);
client
  .connect()
  .then(() => {
    console.log("Redis Connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/data", (req, res) => {
  client.get("results").then(async (response) => {
    if (response) {
      res.json(response);
    } else {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      client.setEx("results", 6000, JSON.stringify(data));
      res.json(data);
    }
  });
});
app.get("/login", (req, res) => {
  if (req.session.username) {
    res.redirect("/home");
  } else {
    res.sendFile(path.join(__dirname, "./public/login.html"));
  }
});
app.get("/home", (req, res) => {
  if (req.session.username) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  } else {
    res.redirect("/login");
  }
});
app.post("/register", (req, res) => {
  client
    .lRange("results", 0, -1)
    .then(async (response) => {
      console.log(response);
      if (response.length > 0) {
        const Filtered = response.filter((data) => {
          const item = JSON.parse(data);
          return item.name === req.body.name;
        });
        if (Filtered.length > 0) {
          return res.status(403).json({
            success: true,
            message: "User Exists",
          });
        } else {
          req.session.username = req.body.username;
          console.log(req.body);
          client.lPush("results", JSON.stringify(req.body));
          return res.status(201).json({
            success: true,
            message: "Created",
          });
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/login", (req, res) => {
  if (req.body.username === req.body.password) {
    req.session.username = req.body.username;
    res.redirect("/home");
  } else {
    res.redirect("/login");
  }
});
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});
app.listen(5000, function (err) {
  if (err) console.log(err);
  console.log("Server Listening on port 5000");
});
