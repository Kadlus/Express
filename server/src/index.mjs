import express from 'express';
import cors from 'cors';
import { corsOptions } from './cors.mjs';
import { limiter } from '../middleware/rateLimit.mjs'
const app = express();

//nutné importovat routes ze souborů
import homeRouter from '../routes/home.mjs';
import productRouter from '../routes/products.mjs';

//parsování do JSON
app.use(express.json());
//omezený počet requestů
app.use(limiter);

app.use(cors(corsOptions));
//použití souboru jako cesta
app.use("/", homeRouter)
app.use("/products", productRouter);

export default app;