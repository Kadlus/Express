import express from "express";
import { homeController } from "./../controller/homeController.mjs";

const router = express.Router();

router.get('/', (req, res) => {
    res.json(homeController());
})

export default router;
