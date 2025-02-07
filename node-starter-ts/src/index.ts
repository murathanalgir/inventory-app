import express, {Request, Response} from "express";
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

app.get("/customers", async(req:Request,res:Response) => {
    const customers = [
        {name:"John Doe", email:"john@mail.com", phone:"+123456789"}
    ]
    return res.status(200).json(customers)
});
