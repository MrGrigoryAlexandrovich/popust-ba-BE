const Catalogue = require("../models/catalogue");

exports.createCatalogue = async (catalogueData) => {
  try {
    const catalogue = await Catalogue.create(catalogueData);
    return catalogue;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

exports.getCatalogs = async () => {
  try {
    const catalogs = await Catalogue.find();
    return catalogs;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

exports.updateCatalogue = async (catalogueId, updatedData) => {
  try {
    const updatedCatalogue = await Catalogue.findByIdAndUpdate(
      catalogueId,
      updatedData,
      {
        new: true,
      }
    );
    if (!updatedCatalogue) {
      throw new Error("Catalogue not found");
    }
    return updatedCatalogue;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

exports.deleteCatalogue = async (catalogueId) => {
  try {
    const deletedCatalogue = await Catalogue.findByIdAndDelete(catalogueId);
    if (!deletedCatalogue) {
      throw new Error("Catalogue not found");
    }
    return deletedCatalogue;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};
