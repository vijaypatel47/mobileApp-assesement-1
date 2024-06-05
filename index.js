const express = require("express");

const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
  res.sendFiles("index.html", { root: __dirname });
});

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  const errors = {};

  if (!username || username.trim() === "") {
    errors.username = "Username is required";
  }

  if (!email || email.trim() === "") {
    errors.email = "Email is required";
  }

  if (!password || password.trim() === "") {
    errors.password = "Password is required";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }
  console.log(req.body);

  res.status(200).json({ message: "Registration successful" });
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
