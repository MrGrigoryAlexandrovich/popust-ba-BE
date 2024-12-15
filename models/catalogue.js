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
      type: String,
      required: [true, "Please enter start date"],
    },
    expiredDate: {
      type: String,
      required: [true, "Please enter expired date"],
    },
  },
  {
    collection: "catalogs",
  }
);

const Catalogue = mongoose.model("Catalogue", CatalogueSchema);

module.exports = Catalogue;
