const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const router = require("./routes/api_routes");

const app = express();
app.use(express.json());
app.use("/api",router);
const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`listening in port ${PORT}`)
});