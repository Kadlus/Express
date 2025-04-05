import express from 'express';
import limiter from 'express-rate-limit';
import cors from 'cors';
import { corsOptions } from './cors.mjs';
const app = express();
const PORT = process.env.PORT || 8080;

//nutné importovat routes ze souborů
import homeRouter from '../routes/home.mjs';
import productRouter from '../routes/products.mjs';

//parsování do JSON
app.use(express.json());
//omezený počet requestů
app.use(limiter);

//app.use(cors(corsOptions));
//použití souboru jako cesta
app.use("/", homeRouter)
app.use("/products", productRouter);

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

export default app;