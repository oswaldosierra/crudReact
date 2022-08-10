import express from "express";
import db from "./database/db.js";
import cors from "cors";
import blogRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);

try {
  await db.authenticate();
  console.log("Conexion ok");
} catch (error) {
  console.log(`El error es: ${error}`);
}

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.listen(8000, () => {
  console.log("server Up running in 8000");
});
