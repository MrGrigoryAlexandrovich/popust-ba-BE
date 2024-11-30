const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const user = await userController.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  console.log("x");
  try {
    const users = await userController.getUsers();
    const response = {
      data: users,
    };
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;
    const updatedUser = await userController.updateUser(userId, updatedData);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await userController.deleteUser(userId);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
