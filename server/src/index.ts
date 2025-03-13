import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// Route Imports
import dashboardRoutes from "./routes/dashboardRoutes";


// Configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/dashboard", dashboardRoutes) //http://localhost:8000/dashboard

//server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("server running on ports");
});
