const mongoose = require("mongoose");

const CatalogueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title"],
      unique: true,
    },
    ownerId: {
      type: String,
      required: [true, "Please enter owner id"],
    },
    owner: {
      type: String,
      required: [true, "Please enter owner"],
    },
    images: {
      type: [String],
      required: [true, "Please enter images"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    startDate: {
      default: Date.now,
    },
    expiredDate: {
      type: String,
      default: Date.now,
    },
  },
  {
    collection: "catalogs",
  }
);

const Catalogue = mongoose.model("Catalogue", CatalogueSchema);

module.exports = Catalogue;
