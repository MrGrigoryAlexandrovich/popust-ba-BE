const express = require("express");
const cors = require("cors");

const connectDB = require("./db/connection");

const usersRoutes = require("./routes/users");
const catalogsRoutes = require("./routes/catalogs");

const app = express();
const PORT = 4000;

app.use(cors());

app.use(express.json());
app.use("/api/users", usersRoutes);
app.use("/api/catalogs", catalogsRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server run on http://localhost:${PORT}`);
});