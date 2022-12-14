import express from "express";

import { allSales, singleSale, newSale, updateSale, deleteSale } from "../controllers/saleController.js";

const saleRoute = express.Router();
// endpoint to get all records
saleRoute.get("/sales", allSales);
// endpoint to get single record
saleRoute.get("/sales/:id", singleSale)
// endpoit to create new record
saleRoute.post("/sales", newSale)
// endpoint to update a record
saleRoute.patch("/sales/:id", updateSale);
// endpoint to delete a record
saleRoute.delete("/sales/:id", deleteSale)
export default saleRoute;