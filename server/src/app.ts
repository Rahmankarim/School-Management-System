import express from 'express';
import cors from 'cors';
import { router } from './Routes/smsRoutes';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(express.json());
app.use("/api", router);



export default app;
