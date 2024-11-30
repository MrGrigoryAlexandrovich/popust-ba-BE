const express = require("express");
const catalogueController = require("../controllers/catalogue");
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const catalogue = await catalogueController.createCatalogue(req.body);
    return res.status(201).json(catalogue);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const catalogs = await catalogueController.getCatalogs();
    return res.status(201).json(catalogs);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const catalogueId = req.params.id;
    const updatedData = req.body;
    const updatedCatalogue = await catalogueController.updateCatalogue(
      catalogueId,
      updatedData
    );
    return res.status(200).json(updatedCatalogue);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const catalogueId = req.params.id;
    const deletedCatalogue = await catalogueController.deleteCatalogue(
      catalogueId
    );
    return res.status(200).json(deletedCatalogue);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;
