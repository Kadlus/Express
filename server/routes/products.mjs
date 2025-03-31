import express from "express";
import {products} from "../src/database.mjs";
const router = express.Router();

router.get('/', (req, res) => {
    res.send(products)
})
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    console.log(products);
    const query = products.find(item => item.id === id);
    console.log(query)
    if (!query) {
        return res.status(404).send({"message": "No product found with this id "});
    }
    res.send(query);
})
export default router;