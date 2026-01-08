const express = require("express");
const app = express();
const userModel = require("./usser_model/user"); // ensure path is correct
const path = require("path");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// HOME (FORM)
app.get("/", (req, res) => {
  res.render("index");
});

// CREATE USER
app.post("/create", async (req, res) => {
  const { image, name, email } = req.body;

  await userModel.create({
    image,
    name,
    email,
  });

  // ✅ redirect instead of send
  res.redirect("/read");
});

// READ USERS
app.get("/read", async (req, res) => {
  const users = await userModel.find();
  res.render("read", { users });
});

app.get("/delete/:id", async (req, res) => {
  await userModel.findByIdAndDelete(req.params.id);
  res.redirect("/read");
});

app.get("/edit/:id", async (req, res) => {
  const user = await userModel.findById(req.params.id);
  res.render("edit", { user });
});

// UPDATE USER
app.post("/update/:id", async (req, res) => {
  const { image, name, email } = req.body;

  await userModel.findByIdAndUpdate(
    req.params.id,
    { image, name, email },
    { new: true }
  );

  res.redirect("/read");
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
