import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080;

//nutné importovat routes ze souborů
import homeRouter from '../routes/home.mjs';
import productRouter from '../routes/products.mjs';

//parsování do JSON
app.use(express.json());


//použití souboru jako cesta
app.use("/", homeRouter)
app.use("/products", productRouter);



app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
