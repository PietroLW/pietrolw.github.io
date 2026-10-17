import express from "express";
import atividadeRoutes from "./routes/atividadeRoutes.js"

const app = express();

app.use(express.json());
app.use("/api", atividadeRoutes);

export default app;