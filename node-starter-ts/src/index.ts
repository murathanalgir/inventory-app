import express, {Request, Response} from "express";
import { getCustomers, getCustomersv2 } from "./controllers/customers";
import customerRouter from "./routes/customer";
require("dotenv").config();
const cors = require("cors");
const app = express(); // Creating express app

const PORT = process.env.PORT || 8000; // Getting server port .env file or default 8000 port
app.use(cors()); // Using cors for middleware
app.use(express.json()); // Parse incoming JSON requests. Make the data available in req.body

app.listen(PORT, () => {
  console.log(`${PORT} server started 🌩`);
  // Logging to console server is started and listening the port
});

//Creating API
app.use("/api/v1", customerRouter)
app.use("/api/v2", customerRouter)