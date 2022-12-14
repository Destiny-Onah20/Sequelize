import("./config/dbConfig.js");
import express from "express";
import saleRoute from "./routes/saleRoutes.js";

const port = 9191;
const app = express();


app.use(express.json());
app.use("/api/v1", saleRoute);



app.listen(port, () => {
    console.log(`Listening to port: ${port}`)
});