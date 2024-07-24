import express, { Request, Response } from 'express';
import cors from 'cors';
import axios, { AxiosRequestConfig, Method } from 'axios';
import { AxiosRequestHeaders } from 'axios';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Home Page');
});

app.get('/metrics', (req: Request, res: Response) => {
    res.send('Welcome to the Metrics Page');
});

app.get('/predictions', (req: Request, res: Response) => {
    res.send('Welcome to the Predictions Page');
});

app.get('/about', (req: Request, res: Response) => {
    res.send('Welcome to the About Page');
});

app.all('/proxy/*', async (req: Request, res: Response) => {
    const url = `http://django-api-url${req.path.replace('/proxy', '')}`;

    try {
        const config: AxiosRequestConfig = {
            method: req.method as Method,
            url: url,
            data: req.body,
            headers: req.headers as AxiosRequestHeaders,
        };

        const response = await axios(config);

        res.status(response.status).send(response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            res.status(error.response?.status || 500).send(error.message);
        } else {
            res.status(500).send('Unexpected error');
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
