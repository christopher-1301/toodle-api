const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const cors = require("cors");
const tasksRouter = require("./routes/tasks");

const app = express();
const swaggerDocument = YAML.load("./swagger.yaml");

app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/tasks", tasksRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello from your API!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
