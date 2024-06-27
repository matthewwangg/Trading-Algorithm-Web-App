import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Home Page');
});

app.get('/visualization', (req: Request, res: Response) => {
    res.send('Welcome to the Visualization Page');
});

app.get('/trading-strategy', (req: Request, res: Response) => {
    res.send('Welcome to the Trading Strategy Page');
});

app.get('/about', (req: Request, res: Response) => {
    res.send('Welcome to the About Page');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
