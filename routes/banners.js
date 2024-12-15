const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    const banners = [
      "https://i.imgur.com/0rfelEz.png",
      "https://fis.ba/wp-content/uploads/2021/07/logo-fis-doo.png",
    ];
    return res.status(200).json(banners);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;
